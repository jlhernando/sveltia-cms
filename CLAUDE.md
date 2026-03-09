# CLAUDE.md

## Telegram Control (telegram-me)

When telegram-me MCP tools are available, this project is controlled via Telegram by default.

**Auto-start autonomous mode:**
1. At the start of every conversation, create the flag file: `touch /tmp/telegram-me-autonomous.flag`
2. **Check for resumption context**: Look for `~/.telegram-me/resume/{project}.json`. If it exists:
   - Read the saved context (last messages from the rate-limited session)
   - Delete the resumption file
   - Notify via Telegram: "Resuming from rate-limited session."
   - Report the last task: show the saved `lastMessages` so the user knows what was in progress
   - Ask user: "Continue with this task?" with `["Yes, continue", "New task"]` options
   - If "Yes, continue": proceed with the last task from the saved messages
3. Call `get_user_message` to check for buffered Telegram messages
4. Notify user via Telegram: "Autonomous mode active."
5. Enter the autonomous loop

**Autonomous loop:**
1. Wait for Telegram instructions using `ask_user`
2. Execute the instruction (permissions are auto-approved via hook)
3. Report results via `notify_user`
4. **Suggest next steps** (see Smart Suggester below)
5. Loop back to waiting
6. Exit when user sends `/stop` or `/exit`

**Smart Suggester — after completing a task:**
Instead of passively asking "What's next?", proactively analyze the project state and suggest 2-4 concrete next steps. Run these checks silently:

1. **Git status**: uncommitted changes? Untracked files? Suggest committing or cleaning up.
2. **Test health**: run tests silently. Failing tests? Suggest fixing them.
3. **TODOs/FIXMEs**: search for TODO/FIXME comments. Highlight actionable ones.
4. **Recent changes context**: based on the task just completed, suggest natural follow-ups (e.g., "added a feature → write tests", "fixed a bug → check for similar patterns").
5. **Build health**: does the build succeed? TypeScript errors? Suggest fixing them.

Present suggestions via `ask_user` with the `options` parameter so they appear as reply keyboard buttons:
- Question text: "Done! Here's what we could tackle next:"
- Options: `["Fix 2 failing tests", "TODO in file.ts:42", "Commit 3 changed files", "Something else"]`

**IMPORTANT — always include `options`:** Every `ask_user` call MUST include the `options` parameter with 2-4 choices as reply keyboard buttons. This includes the initial "waiting for instructions" prompt, smart suggestions, and any other question. Without `options`, the user loses the convenient keyboard buttons.

Guidelines:
- Keep analysis fast — skip slow checks if the project is large
- Prioritize: failing tests > build errors > uncommitted changes > TODOs
- If nothing actionable is found, ask "What would you like to do next?" with generic options like `["Check project status", "Run tests", "Review recent changes", "Something else"]`
- Don't repeat suggestions the user already declined in this session

**Exiting autonomous mode:**
1. Delete the flag file: `rm -f /tmp/telegram-me-autonomous.flag`
2. Notify user: "Autonomous mode ended."

**Always acknowledge Telegram messages:**
- Every message received must be acknowledged in TWO places:
  1. In the terminal: Output "**Telegram message received:** {message}"
  2. In Telegram: Send a response using `notify_user`
- Check for new messages periodically using `get_user_message`

**Ask before file changes:**
- Before using Edit, Write, or any file-modifying tool, use `ask_user` to confirm
- Format: "About to [action] [file]. Proceed?" with [Yes/No] options

**Planning via Telegram (NEVER use plan mode):**
- NEVER use `EnterPlanMode` or `ExitPlanMode` — they trigger terminal prompts that block autonomous mode
- For tasks requiring planning: explore the codebase, write a plan as text, send via `approve_plan`
- After user approves, implement directly without entering plan mode

**Cross-bot code review (/review):**
When the user sends `/review`, use the `request_review` MCP tool to launch a cross-bot review:
1. Generate a review document: run `git diff` (or `git diff HEAD~1` for the last commit), write it to a temp file with context
2. Call `request_review` with the file path — this launches another bot to review the changes
3. The tool blocks until the reviewer finishes (up to 5 min) and returns the feedback
4. Share the feedback with the user via `notify_user`
If no reviewer bot is available, the tool returns a list of busy bots.

**Telegram commands:**
| Command | Action |
|---------|--------|
| `/stop` or `/exit` | Exit autonomous mode |
| `/status` | Report current activity |
| `/model` | Report current model |
| `/compact` | Remind user to run /compact in terminal |
| `/help` | List available commands |
| `/review` | Launch cross-bot code review (uses `request_review` MCP tool) |
| `/design <brief>` | Launch specialist designer agent (uses `request_specialist` MCP tool) |
| `/usage` | Usage stats (server-side, zero tokens) |
| `/ping` | Health check (server-side, zero tokens) |
| `/bots` | Show all bot statuses (server-side, zero tokens) |
| `/dash` | Dashboard summary (server-side, zero tokens) |
| `/summon` | Switch to a different project (server-side) |
| `/restart` | Kill and relaunch this session (server-side) |
| `/kill` | Terminate this session (server-side) |
| `/refine <prompt>` | Transform a rough prompt into a well-crafted instruction |
| `/self-driving [N]` | Start fully autonomous improvement loop (N iterations, default 3) |

**Prompt Refinement (/refine):**
When the user sends `/refine <prompt>`, transform their rough instruction into a well-crafted, detailed prompt using these principles:
1. **Specificity**: Replace vague terms with concrete actions, files, and modules
2. **Decomposition**: Break complex tasks into ordered steps
3. **Success criteria**: Define what "done" looks like
4. **Scope boundaries**: Set explicit limits to prevent scope creep
5. **Context grounding**: Reference specific files/functions from the project
6. **Verification**: Include how to verify the change works
7. **Minimal sufficiency**: Don't over-constrain — apply principles selectively

Send the refined prompt via `notify_user`, then present options: `["Use this prompt", "Refine further", "Edit manually"]`.
If "Use this prompt" → execute it. If "Refine further" → ask what to change. If "Edit manually" → user sends their version.
If no prompt provided, ask "What task would you like me to refine?".

**Command chaining:** `/refine` can be combined with other commands (e.g., `/refine /design <brief>`). Refine the brief for that command, then offer to execute it directly with the refined version.

**Specialist Designer (/design):**
When the user sends `/design <brief>`, launch a specialist designer agent:
1. Call `request_specialist(role: "designer", brief: "<the brief>")` — this launches an available bot with designer-specific instructions
2. The designer bot autonomously: researches design systems (Dribbble/Behance/Mobbin/component.gallery), creates 5 unique HTML designs grounded in real design systems, screenshots each, writes comparison summary
3. When `request_specialist` returns, present the results to the user via `notify_user`
4. If no brief provided, ask "What would you like me to design?" with example options
5. If no bot is available, the tool returns a list of busy bots — inform the user

**Self-Driving Mode (/self-driving):**
When the user sends `/self-driving [N]`, enter **fully autonomous improvement mode** for N iterations (default 3, max 20).

**HARD RULE: ZERO `ask_user` calls during self-driving.** The ONLY communication tool is `notify_user`. Do NOT ask "What should I tackle?", do NOT ask for approval. YOU decide what to fix, YOU decide priority, YOU implement it. The `/self-driving` trigger IS the approval. Check `get_user_message(wait=false)` between phases only to detect `/stop`.

**Self-driving replaces the normal autonomous loop. Do NOT fall back to ask → execute → suggest.**

**Step-by-step:**
1. Notify start: `notify_user("Self-driving activated (N iterations). Analyzing...")`
2. Check resume state at `~/.telegram-me/self-driving/{project}.json`
3. Audit repo silently (build, tests, TODOs, broken links, etc.). Rank findings by severity.
4. Notify goals (informational only): `notify_user("Found N issues. Starting iteration 1/N...")` — proceed immediately.
5. For each iteration (fully autonomous):
   a. Pick highest-priority unresolved issue. Write scoped plan.
   b. Notify plan via `notify_user` — proceed immediately, do NOT wait.
   c. Delegate via `request_specialist(role: 'implementer', brief: plan)`
   d. Review result: check diff for security, tests, scope creep.
   e. Merge if clean, rollback if not — notify result.
   f. Save state, check for `/stop`, trigger `/restart` for fresh context.
6. After all iterations: notify final summary, clear state file, return to normal mode.
