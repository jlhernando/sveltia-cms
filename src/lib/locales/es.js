/**
 * Spanish locale for Sveltia CMS.
 */
export const strings = {
  // Pages & Navigation
  collections: 'Colecciones',
  contents: 'Contenidos',
  entries: 'Entradas',
  files: 'Archivos',
  assets: 'Archivos',
  media: 'Medios',
  workflow: 'Flujo editorial',
  editorial_workflow: 'Flujo editorial',
  menu: 'Menú',

  // Account
  user_name: 'Nombre de usuario',
  password: 'Contraseña',
  sign_in: 'Iniciar sesión',
  sign_in_with_mobile: 'Iniciar sesión con móvil',
  sign_in_with_mobile_instruction:
    'Escanea el código QR con tu teléfono o tableta para iniciar sesión sin contraseña. Tu configuración se copiará automáticamente.',
  signed_in_as_x: 'Conectado como {name}',
  working_with_local_repo: 'Trabajando con repositorio local',
  working_with_test_repo: 'Trabajando con repositorio de prueba',
  sign_out: 'Cerrar sesión',

  // Common terms
  create: 'Nuevo',
  select: 'Seleccionar',
  select_all: 'Seleccionar todo',
  upload: 'Subir',
  copy: 'Copiar',
  download: 'Descargar',
  duplicate: 'Duplicar',
  delete: 'Eliminar',
  save: 'Guardar',
  saving: 'Guardando…',
  rename: 'Renombrar',
  update: 'Actualizar',
  replace: 'Reemplazar',
  add: 'Añadir',
  remove: 'Eliminar',
  remove_x: 'Eliminar {name}',
  clear: 'Limpiar',
  expand: 'Expandir',
  expand_all: 'Expandir todo',
  collapse: 'Contraer',
  collapse_all: 'Contraer todo',
  insert: 'Insertar',
  restore: 'Restaurar',
  discard: 'Descartar',
  searching: 'Buscando…',
  no_results: 'No se encontraron resultados.',
  global: 'Global',
  primary: 'Principal',
  secondary: 'Secundario',
  collection: 'Colección',
  folder: 'Carpeta',
  api_key: 'Clave API',
  details: 'Detalles',
  back: 'Volver',
  loading: 'Cargando…',
  later: 'Más tarde',
  slug: 'Slug',
  singleton: 'Archivo único',
  singletons: 'Archivos únicos',

  // Common errors
  clipboard_error: 'Hubo un error al copiar los datos.',

  // Entrance
  welcome_message: 'Bienvenido a {name}',
  powered_by: 'Desarrollado con {name}',
  loading_cms_config: 'Cargando configuración del CMS…',
  loading_site_data: 'Cargando datos del sitio…',
  loading_site_data_error: 'Hubo un error al cargar los datos del sitio.',
  sign_in_with_x: 'Iniciar sesión con {service}',
  sign_in_with_x_using_token: 'Iniciar sesión con {service} usando token',
  sign_in_using_pat_title: 'Iniciar sesión con token de acceso personal',
  sign_in_using_pat_description:
    'Introduce tu token a continuación. Debe tener acceso de lectura/escritura al contenido del repositorio.',
  sign_in_using_pat_link: 'Puedes generar un token en la <a>página de configuración de usuario de {service}</a>.',
  personal_access_token: 'Token de acceso personal',
  authorizing: 'Autorizando…',
  signing_in: 'Iniciando sesión…',
  work_with_local_repo: 'Trabajar con repositorio local',
  work_with_local_repo_description:
    'Cuando se te solicite, selecciona el directorio raíz del repositorio "{repo}".',
  work_with_local_repo_description_no_repo:
    'Cuando se te solicite, selecciona el directorio raíz de tu repositorio Git.',
  work_with_test_repo: 'Trabajar con repositorio de prueba',
  sign_in_error: {
    not_project_root:
      'La carpeta seleccionada no es el directorio raíz del repositorio. Inténtalo de nuevo.',
    picker_dismissed: 'No se pudo seleccionar el directorio raíz del repositorio. Inténtalo de nuevo.',
    authentication_aborted: 'Autenticación cancelada. Inténtalo de nuevo.',
    invalid_token: 'El token proporcionado no es válido. Verifícalo e inténtalo de nuevo.',
    UNSUPPORTED_BACKEND: 'Tu backend de Git no es compatible con el autenticador.',
    UNSUPPORTED_DOMAIN: 'Tu dominio no tiene permiso para usar el autenticador.',
    MISCONFIGURED_CLIENT: 'El ID de cliente o secreto de la app OAuth no está configurado.',
    AUTH_CODE_REQUEST_FAILED: 'No se pudo recibir el código de autorización. Inténtalo más tarde.',
    CSRF_DETECTED: 'Se detectó un posible ataque CSRF. Flujo de autenticación cancelado.',
    TOKEN_REQUEST_FAILED: 'No se pudo solicitar el token de acceso. Inténtalo más tarde.',
    TOKEN_REFRESH_FAILED: 'No se pudo renovar el token de acceso. Inténtalo más tarde.',
    MALFORMED_RESPONSE: 'El servidor respondió con datos malformados. Inténtalo más tarde.',
  },
  backend_unsupported_version: 'El backend {name} requiere {name} {version} o superior.',
  repository_no_access: 'No tienes acceso al repositorio "{repo}".',
  repository_not_found: 'El repositorio "{repo}" no existe.',
  repository_empty: 'El repositorio "{repo}" no tiene ramas.',
  branch_not_found: 'El repositorio "{repo}" no tiene la rama "{branch}".',
  unexpected_error: 'Error inesperado',

  // Parser errors
  entry_parse_error:
    'Hubo un error al analizar un archivo de entrada. Revisa la consola del navegador para más detalles.',
  entry_parse_errors:
    'Hubo errores al analizar archivos de entrada. Revisa la consola del navegador para más detalles.',

  // Onboarding
  mobile_promo_title: '¡Sveltia CMS ya está disponible en móvil!',
  mobile_promo_button: 'Pruébalo',

  // Global toolbar
  visit_live_site: 'Visitar sitio en vivo',
  switch_page: 'Cambiar página',
  search_placeholder_entries: 'Buscar entradas…',
  search_placeholder_assets: 'Buscar archivos…',
  search_placeholder_all: 'Buscar entradas y archivos…',
  create_entry_or_assets: 'Crear entrada o archivos',
  publish_changes: 'Publicar cambios',
  publishing_changes: 'Publicando cambios…',
  publishing_changes_failed: 'No se pudieron publicar los cambios. Inténtalo más tarde.',
  show_notifications: 'Mostrar notificaciones',
  notifications: 'Notificaciones',
  show_account_menu: 'Mostrar menú de cuenta',
  account: 'Cuenta',
  live_site: 'Sitio en vivo',
  git_repository: 'Repositorio Git',
  settings: 'Configuración',
  cms_config: 'Configuración del CMS',
  show_help_menu: 'Mostrar menú de ayuda',
  help: 'Ayuda',
  keyboard_shortcuts: 'Atajos de teclado',
  documentation: 'Documentación',
  release_notes: 'Notas de versión',
  announcements: 'Anuncios',
  version_x: 'Versión {version}',
  report_issue: 'Reportar problema',
  share_feedback: 'Compartir opinión',
  get_help: 'Obtener ayuda',
  join_discord: 'Únete en Discord',
  bluesky: 'Síguenos en Bluesky',

  // Update notification
  update_available: 'La última versión de Sveltia CMS está disponible.',
  update_now: 'Actualizar ahora',

  // Backend status indicator
  backend_status: {
    minor_incident:
      '{service} está experimentando un incidente menor. Tu flujo de trabajo podría verse afectado.',
    major_incident:
      '{service} está experimentando un incidente mayor. Es posible que quieras esperar hasta que la situación mejore.',
  },

  // Library
  content_library: 'Biblioteca de contenido',
  asset_library: 'Biblioteca de archivos',
  asset_location: {
    repository: 'Tu sitio',
    external: 'Ubicaciones externas',
    stock_photos: 'Fotos de stock',
  },
  collection_assets: 'Archivos de colección',
  entry_list: 'Lista de entradas',
  file_list: 'Lista de archivos',
  asset_list: 'Lista de archivos',
  x_collection: 'Colección "{collection}"',
  x_asset_folder: 'Carpeta de archivos "{folder}"',
  viewing_collection_list: 'Estás viendo la lista de colecciones.',
  viewing_asset_folder_list: 'Estás viendo la lista de carpetas de archivos.',
  viewing_x_collection_many_entries:
    'Estás viendo la colección "{collection}", que tiene {count} entradas.',
  viewing_x_collection_one_entry:
    'Estás viendo la colección "{collection}", que tiene una entrada.',
  viewing_x_collection_no_entries:
    'Estás viendo la colección "{collection}", que aún no tiene entradas.',
  viewing_x_asset_folder_many_assets:
    'Estás viendo la carpeta de archivos "{folder}", que tiene {count} archivos.',
  viewing_x_asset_folder_one_asset:
    'Estás viendo la carpeta de archivos "{folder}", que tiene un archivo.',
  viewing_x_asset_folder_no_assets:
    'Estás viendo la carpeta de archivos "{folder}", que aún no tiene archivos.',
  singleton_selected_announcement: 'Pulsa Enter para editar el archivo "{file}".',
  collection_not_found: 'Colección no encontrada',
  file_not_found: 'Archivo no encontrado.',
  x_of_x_selected: '{selected} de {total} seleccionados',
  switch_view: 'Cambiar vista',
  list_view: 'Vista de lista',
  grid_view: 'Vista de cuadrícula',
  switch_to_list_view: 'Cambiar a vista de lista',
  switch_to_grid_view: 'Cambiar a vista de cuadrícula',
  sort: 'Ordenar',
  sorting_options: 'Opciones de ordenación',
  sort_keys: {
    none: 'Ninguno',
    name: 'Nombre',
    slug: 'Slug',
    commit_author: 'Actualizado por',
    commit_date: 'Actualizado el',
  },
  ascending: '{label}, A a Z',
  ascending_date: '{label}, antiguo a nuevo',
  descending: '{label}, Z a A',
  descending_date: '{label}, nuevo a antiguo',
  filter: 'Filtrar',
  filtering_options: 'Opciones de filtrado',
  group: 'Agrupar',
  grouping_options: 'Opciones de agrupación',
  type: 'Tipo',
  all: 'Todos',
  image: 'Imagen',
  video: 'Vídeo',
  audio: 'Audio',
  document: 'Documento',
  other: 'Otro',
  show_assets: 'Mostrar archivos',
  hide_assets: 'Ocultar archivos',
  show_info: 'Mostrar información',
  hide_info: 'Ocultar información',
  all_assets: 'Todos los archivos',
  global_assets: 'Archivos globales',
  entry_not_found: 'Entrada no encontrada.',
  creating_entries_disabled_by_admin:
    'La creación de nuevas entradas en esta colección está deshabilitada por el administrador.',
  creating_entries_disabled_by_quota:
    'No puedes añadir nuevas entradas a esta colección porque ha alcanzado su límite de {quota} entradas.',
  creating_entries_nearing_quota_singular:
    'Esta colección se acerca a su límite de {quota} entradas. Solo puedes crear {remaining} entrada más.',
  creating_entries_nearing_quota_plural:
    'Esta colección se acerca a su límite de {quota} entradas. Solo puedes crear {remaining} entradas más.',
  back_to_collection: 'Volver a la colección',
  collection_list: 'Lista de colecciones',
  back_to_collection_list: 'Volver a la lista de colecciones',
  asset_folder_list: 'Lista de carpetas de archivos',
  back_to_asset_folder_list: 'Volver a la lista de carpetas de archivos',
  search_results: 'Resultados de búsqueda',
  search_results_for_x: 'Resultados de búsqueda para "{terms}"',
  viewing_entry_search_results:
    'Estás viendo los resultados de búsqueda para "{terms}". Se encontraron {entries}.',
  viewing_asset_search_results:
    'Estás viendo los resultados de búsqueda para "{terms}". Se encontraron {assets}.',
  many_entries: '{count} entradas',
  one_entry: 'una entrada',
  no_entries: 'ninguna entrada',
  many_assets: '{count} archivos',
  one_asset: 'un archivo',
  no_assets: 'ningún archivo',
  no_files_found: 'No se encontraron archivos.',
  no_entries_found: 'No se encontraron entradas.',
  upload_assets: 'Subir nuevos archivos',
  edit_options: 'Opciones de edición',
  show_edit_options: 'Mostrar opciones de edición',
  edit_asset: 'Editar archivo',
  edit_x: 'Editar {name}',
  wrap_long_lines: 'Ajustar líneas largas',
  rename_asset: 'Renombrar archivo',
  rename_x: 'Renombrar {name}',
  enter_new_name_for_asset: 'Introduce un nuevo nombre a continuación.',
  enter_new_name_for_asset_with_one_entry:
    'Introduce un nuevo nombre a continuación. Una entrada que usa el archivo también se actualizará.',
  enter_new_name_for_asset_with_many_entries:
    'Introduce un nuevo nombre a continuación. {count} entradas que usan el archivo también se actualizarán.',
  enter_new_name_for_asset_error: {
    empty: 'El nombre del archivo no puede estar vacío.',
    character: 'El nombre del archivo no puede contener caracteres especiales.',
    duplicate: 'Este nombre de archivo ya está en uso.',
  },
  replace_asset: 'Reemplazar archivo',
  replace_x: 'Reemplazar {name}',
  click_to_browse: 'Haz clic para buscar…',
  tap_to_browse: 'Toca para buscar…',
  drop_file_or_click_to_browse: 'Arrastra un archivo aquí o haz clic para buscar…',
  drop_files_or_click_to_browse: 'Arrastra archivos aquí o haz clic para buscar…',
  drop_image_file_or_click_to_browse: 'Arrastra una imagen aquí o haz clic para buscar…',
  drop_image_files_or_click_to_browse: 'Arrastra imágenes aquí o haz clic para buscar…',
  drop_file_here: 'Arrastra un archivo aquí',
  drop_files_here: 'Arrastra archivos aquí',
  unsupported_file_type: 'Tipo de archivo no soportado',
  dropped_file_type_mismatch: 'El archivo arrastrado no es del tipo {type}. Inténtalo de nuevo.',
  dropped_image_type_mismatch:
    'El archivo arrastrado no es compatible. Solo se aceptan imágenes AVIF, GIF, JPEG, PNG, WebP o SVG. Inténtalo de nuevo.',
  choose_file: 'Elegir archivo',
  choose_files: 'Elegir archivos',
  delete_asset: 'Eliminar archivo',
  delete_assets: 'Eliminar archivos',
  delete_selected_asset: 'Eliminar archivo seleccionado',
  delete_selected_assets: 'Eliminar archivos seleccionados',
  confirm_deleting_this_asset: '¿Seguro que quieres eliminar este archivo?',
  confirm_deleting_selected_asset: '¿Seguro que quieres eliminar el archivo seleccionado?',
  confirm_deleting_selected_assets: '¿Seguro que quieres eliminar los {count} archivos seleccionados?',
  confirm_deleting_all_assets: '¿Seguro que quieres eliminar todos los archivos?',
  delete_entry: 'Eliminar entrada',
  delete_entries: 'Eliminar entradas',
  delete_selected_entry: 'Eliminar entrada seleccionada',
  delete_selected_entries: 'Eliminar entradas seleccionadas',
  confirm_deleting_this_entry: '¿Seguro que quieres eliminar esta entrada?',
  confirm_deleting_this_entry_with_assets:
    '¿Seguro que quieres eliminar esta entrada y los archivos asociados?',
  confirm_deleting_selected_entry: '¿Seguro que quieres eliminar la entrada seleccionada?',
  confirm_deleting_selected_entry_with_assets:
    '¿Seguro que quieres eliminar la entrada seleccionada y los archivos asociados?',
  confirm_deleting_selected_entries:
    '¿Seguro que quieres eliminar las {count} entradas seleccionadas?',
  confirm_deleting_selected_entries_with_assets:
    '¿Seguro que quieres eliminar las {count} entradas seleccionadas y los archivos asociados?',
  confirm_deleting_all_entries: '¿Seguro que quieres eliminar todas las entradas?',
  confirm_deleting_all_entries_with_assets:
    '¿Seguro que quieres eliminar todas las entradas y los archivos asociados?',
  processing_file: 'Procesando un archivo. Esto puede tardar un momento.',
  processing_files: 'Procesando archivos. Esto puede tardar un momento.',
  uploading_files: 'Subiendo archivos',
  confirm_replacing_file: '¿Seguro que quieres reemplazar "{name}" con el siguiente archivo?',
  confirm_uploading_file:
    '¿Seguro que quieres guardar el siguiente archivo en la carpeta "{folder}"?',
  confirm_uploading_files:
    '¿Seguro que quieres guardar los siguientes {count} archivos en la carpeta "{folder}"?',
  oversized_files: 'Archivos demasiado grandes',
  warning_oversized_file:
    'Este archivo no se puede subir porque excede el tamaño máximo de {size}. Reduce el tamaño o selecciona otro archivo.',
  warning_oversized_files:
    'Estos archivos no se pueden subir porque exceden el tamaño máximo de {size}. Reduce los tamaños o selecciona otros archivos.',
  uploading_files_progress: 'Subiendo archivos…',
  uploading_file_progress: 'Subiendo archivo…',
  uploading_files_failed: 'No se pudieron subir los archivos',
  uploading_file_failed: 'No se pudo subir el archivo',
  file_meta: '{type} · {size}',
  file_meta_converted_from_x: '(convertido de {type})',
  no_entries_created: 'Esta colección aún no tiene entradas.',
  create_new_entry: 'Crear nueva entrada',
  entry: 'Entrada',
  index_file: 'Archivo índice',
  no_files_in_collection: 'No hay archivos disponibles en esta colección.',
  asset_info: 'Información del archivo',
  select_asset_show_info: 'Selecciona un archivo para ver su información.',
  duplicate_entry: 'Duplicar entrada',
  entry_duplicated: 'La entrada ha sido duplicada. Ahora es un nuevo borrador.',
  entry_validation_error: 'Un campo tiene un error. Corrígelo para guardar la entrada.',
  entry_validation_errors: '{count} campos tienen errores. Corrígelos para guardar la entrada.',
  entry_saved: 'La entrada ha sido guardada.',
  entry_saved_and_published: 'La entrada ha sido guardada y publicada.',
  entry_deleted: 'La entrada ha sido eliminada.',
  entries_deleted: '{count} entradas han sido eliminadas.',
  asset_saved: 'El archivo ha sido guardado.',
  asset_saved_and_published: 'El archivo ha sido guardado y publicado.',
  assets_saved: '{count} archivos han sido guardados.',
  assets_saved_and_published: '{count} archivos han sido guardados y publicados.',
  asset_url_copied: 'La URL del archivo se ha copiado al portapapeles.',
  asset_urls_copied: 'Las URLs de los archivos se han copiado al portapapeles.',
  asset_path_copied: 'La ruta del archivo se ha copiado al portapapeles.',
  asset_paths_copied: 'Las rutas de los archivos se han copiado al portapapeles.',
  asset_data_copied: 'El archivo se ha copiado al portapapeles.',
  asset_downloaded: 'El archivo ha sido descargado.',
  assets_downloaded: 'Los archivos han sido descargados.',
  asset_moved: 'El archivo ha sido movido.',
  assets_moved: '{count} archivos han sido movidos.',
  asset_renamed: 'El archivo ha sido renombrado.',
  assets_renamed: '{count} archivos han sido renombrados.',
  asset_deleted: 'El archivo ha sido eliminado.',
  assets_deleted: '{count} archivos han sido eliminados.',

  // Content editor
  content_editor: 'Editor de contenido',
  restore_backup_title: 'Restaurar borrador',
  restore_backup_description:
    'Esta entrada tiene una copia de seguridad del {datetime}. ¿Quieres restaurar el borrador editado?',
  draft_backup_saved: 'La copia de seguridad del borrador se ha guardado.',
  draft_backup_restored: 'La copia de seguridad del borrador se ha restaurado.',
  draft_backup_deleted: 'La copia de seguridad del borrador se ha eliminado.',
  cancel_editing: 'Cancelar edición',
  create_entry_title: 'Creando {name}',
  create_entry_announcement: 'Estás creando una nueva entrada en la colección "{collection}".',
  edit_entry_title: '{collection} › {entry}',
  edit_entry_announcement:
    'Estás editando la entrada "{entry}" en la colección "{collection}".',
  edit_file_announcement: 'Estás editando el archivo "{file}" en la colección "{collection}".',
  edit_singleton_announcement: 'Estás editando el archivo "{file}".',
  save_and_publish: 'Guardar y publicar',
  save_without_publishing: 'Guardar sin publicar',
  show_editor_options: 'Mostrar opciones del editor',
  editor_options: 'Opciones del editor',
  show_preview: 'Mostrar vista previa',
  sync_scrolling: 'Sincronizar desplazamiento',
  switch_locale: 'Cambiar idioma',
  locale_content_disabled_short: '(deshabilitado)',
  locale_content_error_short: '(error)',
  edit: 'Editar',
  preview: 'Vista previa',
  edit_x_locale: 'Editar contenido en {locale}',
  preview_x_locale: 'Vista previa del contenido en {locale}',
  content_preview: 'Vista previa del contenido',
  'preview_viewport.switch': 'Cambiar dispositivo de vista previa',
  'preview_viewport.mobile': 'Móvil',
  'preview_viewport.tablet': 'Tableta',
  'preview_viewport.desktop': 'Escritorio',
  'live_preview.switch_mode': 'Cambiar modo de vista previa',
  'live_preview.fields_mode': 'Vista previa de campos',
  'live_preview.live_mode': 'Vista previa en vivo',
  'live_preview.title': 'Vista previa en vivo',
  'live_preview.refresh': 'Actualizar vista previa',
  'live_preview.open_in_new_tab': 'Abrir en nueva pestaña',
  'live_preview.not_configured':
    'La vista previa en vivo requiere que preview_path esté configurado en la colección.',
  'live_preview.save_first': 'Guarda la entrada primero para habilitar la vista previa en vivo.',
  'live_preview.load_error': 'Error al cargar la vista previa. Es posible que el sitio necesite reconstruirse después de guardar.',
  show_content_options_x_locale: 'Mostrar opciones de contenido en {locale}',
  content_options_x_locale: 'Opciones de contenido en {locale}',
  x_field: 'Campo "{field}"',
  show_field_options: 'Opciones del campo',
  field_options: 'Opciones del campo',
  unsupported_field_type_x: 'Tipo de campo no soportado: {name}',
  enable_x_locale: 'Habilitar {locale}',
  reenable_x_locale: 'Rehabilitar {locale}',
  disable_x_locale: 'Deshabilitar {locale}',
  locale_x_has_been_disabled: 'El contenido en {locale} ha sido deshabilitado.',
  locale_x_now_disabled:
    'El contenido en {locale} ahora está deshabilitado. Se eliminará cuando guardes la entrada.',
  view_in_repository: 'Ver en repositorio',
  view_on_x: 'Ver en {service}',
  view_on_live_site: 'Ver en sitio en vivo',
  copy_from: 'Copiar de…',
  copy_from_x: 'Copiar de {locale}',
  translation_options: 'Opciones de traducción',
  translate: 'Traducir',
  translate_field: 'Traducir campo',
  translate_fields: 'Traducir campos',
  translate_from: 'Traducir de…',
  translate_from_x: 'Traducir de {locale}',
  revert_changes: 'Deshacer cambios',
  revert_all_changes: 'Deshacer todos los cambios',
  edit_slug: 'Editar slug',
  edit_slug_warning:
    'Cambiar el slug puede romper enlaces internos y externos a la entrada. Actualmente, Sveltia CMS no actualiza las referencias creadas con campos de Relación, por lo que deberás actualizar manualmente esas referencias junto con otros enlaces.',
  edit_slug_error: {
    empty: 'El slug no puede estar vacío.',
    duplicate: 'Este slug ya está en uso por otra entrada.',
  },
  required: 'Obligatorio',
  editor: {
    translation: {
      none: 'No se ha traducido nada.',
      started: 'Traduciendo…',
      error: 'Hubo un error al traducir.',
      complete: {
        one: 'Se tradujo el campo de {source}.',
        many: 'Se tradujeron {count} campos de {source}.',
      },
    },
    copy: {
      none: 'No se ha copiado nada.',
      complete: {
        one: 'Se copió el campo de {source}.',
        many: 'Se copiaron {count} campos de {source}.',
      },
    },
  },
  validation: {
    value_missing: 'Este campo es obligatorio.',
    range_underflow: {
      'datetime-local': 'La fecha/hora debe ser igual o posterior a {min}.',
      date: 'La fecha debe ser igual o posterior a {min}.',
      time: 'La hora debe ser igual o posterior a {min}.',
      number: 'El valor debe ser mayor o igual a {min}.',
      select_many: 'Debes seleccionar al menos {min} elementos.',
      select_one: 'Debes seleccionar al menos {min} elemento.',
      add_many: 'Debes añadir al menos {min} elementos.',
      add_one: 'Debes añadir al menos {min} elemento.',
    },
    range_overflow: {
      'datetime-local': 'La fecha/hora debe ser igual o anterior a {max}.',
      date: 'La fecha debe ser igual o anterior a {max}.',
      time: 'La hora debe ser igual o anterior a {max}.',
      number: 'El valor debe ser menor o igual a {max}.',
      select_many: 'No puedes seleccionar más de {max} elementos.',
      select_one: 'No puedes seleccionar más de {max} elemento.',
      add_many: 'No puedes añadir más de {max} elementos.',
      add_one: 'No puedes añadir más de {max} elemento.',
    },
    too_short: {
      one: 'Debes introducir al menos {min} carácter.',
      many: 'Debes introducir al menos {min} caracteres.',
    },
    too_long: {
      one: 'No puedes introducir más de {max} carácter.',
      many: 'No puedes introducir más de {max} caracteres.',
    },
    type_mismatch: {
      number: 'Introduce un número.',
      email: 'Introduce un email válido.',
      url: 'Introduce una URL válida.',
    },
  },
  saving_entry: {
    error: {
      title: 'Error',
      description: 'Hubo un error al guardar la entrada. Inténtalo más tarde.',
    },
  },

  // Media details
  viewing_x_asset_details: 'Estás viendo los detalles del archivo "{name}".',
  asset_editor: 'Editor de archivos',
  preview_unavailable: 'Vista previa no disponible.',
  public_url: 'URL pública',
  public_urls: 'URLs públicas',
  file_path: 'Ruta del archivo',
  file_paths: 'Rutas de archivos',
  file_data: 'Datos del archivo',
  kind: 'Tipo',
  size: 'Tamaño',
  dimensions: 'Dimensiones',
  duration: 'Duración',
  used_in: 'Usado en',
  created_date: 'Fecha de creación',
  location: 'Ubicación',
  map_lat_lng: 'Mapa mostrando latitud {latitude}, longitud {longitude}',

  // Fields
  select_file: 'Seleccionar archivo',
  select_image: 'Seleccionar imagen',
  replace_file: 'Reemplazar archivo',
  replace_image: 'Reemplazar imagen',
  remove_file: 'Eliminar archivo',
  remove_image: 'Eliminar imagen',
  remove_this_item: 'Eliminar este elemento',
  move_up: 'Mover arriba',
  move_down: 'Mover abajo',
  add_x: 'Añadir {name}',
  add_item_above: 'Añadir elemento arriba',
  add_item_below: 'Añadir elemento abajo',
  select_list_type: 'Seleccionar tipo de lista',
  opacity: 'Opacidad',
  unselected_option: '(Ninguno)',
  assets_dialog: {
    title: {
      file: 'Seleccionar archivo',
      image: 'Seleccionar imagen',
    },
    search_for_file: 'Buscar archivos',
    search_for_image: 'Buscar imágenes',
    locations: 'Ubicaciones',
    folder: {
      field: 'Archivos del campo',
      entry: 'Archivos de la entrada',
      file: 'Archivos del archivo',
      collection: 'Archivos de la colección',
      global: 'Archivos globales',
    },
    error: {
      invalid_key: 'Tu clave API no es válida o ha expirado. Verifícala e inténtalo de nuevo.',
      search_fetch_failed: 'Hubo un error al buscar archivos. Inténtalo más tarde.',
      image_fetch_failed:
        'Hubo un error al descargar el archivo seleccionado. Inténtalo más tarde.',
    },
    available_images: 'Imágenes disponibles',
    enter_url: 'Introducir URL',
    enter_file_url: 'Introduce la URL del archivo:',
    enter_image_url: 'Introduce la URL de la imagen:',
    large_file: {
      title: 'Archivo grande',
    },
    photo_credit: {
      title: 'Crédito de foto',
      description: 'Usa el siguiente crédito si es posible:',
    },
    unsaved: 'Sin guardar',
  },
  character_counter: {
    min_max: {
      one: '{count} carácter introducido. Mínimo: {min}. Máximo: {max}.',
      many: '{count} caracteres introducidos. Mínimo: {min}. Máximo: {max}.',
    },
    min: {
      one: '{count} carácter introducido. Mínimo: {min}.',
      many: '{count} caracteres introducidos. Mínimo: {min}.',
    },
    max: {
      one: '{count} carácter introducido. Máximo: {max}.',
      many: '{count} caracteres introducidos. Máximo: {max}.',
    },
  },
  youtube_video_player: 'Reproductor de vídeo de YouTube',
  today: 'Hoy',
  now: 'Ahora',
  editor_components: {
    image: 'Imagen',
    src: 'Fuente',
    alt: 'Texto alternativo',
    title: 'Título',
    link: 'Enlace',
  },
  key_value: {
    key: 'Clave',
    value: 'Valor',
    action: 'Acción',
    empty_key: 'La clave es obligatoria.',
    duplicate_key: 'La clave debe ser única.',
  },
  find_place: 'Buscar un lugar',
  use_your_location: 'Usar tu ubicación',
  geolocation_error_title: 'Error de geolocalización',
  geolocation_error_body: 'Hubo un error al obtener tu ubicación.',
  geolocation_unsupported: 'La API de geolocalización no es compatible con este navegador.',

  // Content preview
  boolean: {
    true: 'Sí',
    false: 'No',
  },

  // Integrations
  cloud_storage: {
    invalid: 'El servicio no está configurado correctamente.',
    auth: {
      api_key: {
        key_label: 'Clave API',
        initial: 'Introduce tu {key} para {service}.',
        requested: 'Validando…',
        error: 'La {key} proporcionada no es válida. Verifícala e inténtalo de nuevo.',
      },
      password: {
        initial: 'Introduce tu contraseña para {service}.',
        requested: 'Iniciando sesión…',
        error: 'El nombre de usuario o la contraseña son incorrectos. Verifícalos e inténtalo de nuevo.',
      },
    },
    cloudinary: {
      iframe_title: 'Biblioteca de medios de Cloudinary',
      activate: {
        button_label: 'Activar Cloudinary',
        description: 'Después de iniciar sesión, haz clic en el botón Iniciar sesión de nuevo para continuar.',
      },
      auth_key_label: 'API Secret',
    },
    uploadcare: {
      auth_key_label: 'API Secret Key',
    },
    aws_s3: {
      auth_key_label: 'Secret Access Key',
    },
    cloudflare_r2: {
      auth_key_label: 'Secret Access Key',
    },
    digitalocean_spaces: {
      auth_key_label: 'Secret Access Key',
    },
  },

  // Configuration
  config: {
    one_error: 'Hay un error en la configuración del CMS. Resuelve el problema e inténtalo de nuevo.',
    many_errors:
      'Hay errores en la configuración del CMS. Resuelve los problemas e inténtalo de nuevo.',
    error_locator: {
      collection: 'colección {collection}',
      file: 'archivo {file}',
      field: 'campo `{field}`',
    },
    error: {
      no_secure_context: 'Sveltia CMS solo funciona con URLs HTTPS o localhost.',
      insecure_url: 'La URL del archivo de configuración debe usar el protocolo HTTPS o una dirección localhost.',
      insecure_urls: 'Las URLs de los archivos de configuración deben usar el protocolo HTTPS o direcciones localhost.',
      fetch_failed: 'No se pudo obtener el archivo de configuración.',
      fetch_failed_not_ok: 'La respuesta HTTP devolvió el estado {status}.',
      fetch_failed_with_manual_init:
        'No se pudo obtener el archivo de configuración. Para evitar que se cargue el archivo `config.yml`, añade [`load_config_file: false`](https://sveltiacms.app/en/docs/api/initialization#providing-a-full-configuration) al objeto de configuración pasado a `CMS.init()`.',
      parse_failed: 'No se pudo analizar el archivo de configuración.',
      parse_failed_invalid_object: 'El archivo de configuración no es un objeto JavaScript válido.',
      parse_failed_unsupported_type:
        'El archivo de configuración no es un tipo de archivo válido. Solo se admiten YAML, TOML y JSON.',
      no_collection: 'Las colecciones no están definidas.',
      missing_backend: 'El backend no está definido.',
      missing_backend_name: 'El nombre del backend no está definido.',
      unsupported_known_backend:
        'El backend {name} [no es compatible](https://sveltiacms.app/en/docs/migration/netlify-decap-cms#features-not-to-be-implemented) con Sveltia CMS.',
      unsupported_custom_backend:
        'Los backends personalizados [no son compatibles](https://sveltiacms.app/en/docs/migration/netlify-decap-cms#features-not-to-be-implemented) con Sveltia CMS.',
      unsupported_backend_suggestion:
        'Usa uno de los [backends compatibles](https://sveltiacms.app/en/docs/backends#supported-backends) en su lugar.',
      missing_repository: 'El repositorio no está definido.',
      invalid_repository:
        'El repositorio configurado no es válido. Debe tener el formato "propietario/repo".',
      oauth_implicit_flow:
        'El método de autenticación configurado (flujo implícito) no es compatible con Sveltia CMS. Usa la autorización PKCE en su lugar.',
      github_pkce_unsupported:
        'La autorización PKCE con GitHub aún no es compatible con Sveltia CMS debido a las limitaciones de GitHub.',
      oauth_no_app_id: 'El ID de la aplicación OAuth no está definido.',
      missing_media_folder: 'La carpeta de medios no está definida.',
      invalid_media_folder: 'La carpeta de medios configurada no es válida. Debe ser una cadena de texto.',
      invalid_public_folder: 'La carpeta pública configurada no es válida. Debe ser una cadena de texto.',
      public_folder_relative_path:
        'La carpeta pública configurada no es válida. Debe ser una ruta absoluta que comience con "/".',
      public_folder_absolute_url:
        'No se admite una URL absoluta para la opción de carpeta pública en Sveltia CMS.',
      invalid_collection_no_options:
        'La colección debe tener definida la opción `folder`, `files` o `divider`.',
      invalid_collection_multiple_options:
        'La colección no puede tener las opciones `folder`, `files` y `divider` juntas.',
      file_format_mismatch: 'La extensión `{extension}` no coincide con el formato `{format}`.',
      invalid_slug_slash:
        'La plantilla de slug `{slug}` no es válida ya que no puede contener barras. Para organizar entradas en subcarpetas, usa la opción `path` en lugar de `slug`.',
      missing_collection_name:
        'La colección {count} debe tener la opción `name` definida como una cadena no vacía.',
      invalid_collection_name:
        'El nombre de colección `{name}` no es válido. No debe contener caracteres especiales.',
      duplicate_collection_name:
        'Los nombres de colección deben ser únicos, pero `{name}` se usa más de una vez.',
      missing_collection_file_name:
        'El archivo de colección {count} debe tener la opción `name` definida como una cadena no vacía.',
      invalid_collection_file_name:
        'El nombre de archivo de colección `{name}` no es válido. No debe contener caracteres especiales.',
      duplicate_collection_file_name:
        'Los nombres de archivo de colección deben ser únicos, pero `{name}` se usa más de una vez.',
      missing_field_name:
        'El campo {count} debe tener la opción `name` definida como una cadena no vacía.',
      invalid_field_name:
        'El nombre de campo `{name}` no es válido. No debe contener caracteres especiales.',
      duplicate_field_name: 'Los nombres de campo deben ser únicos, pero `{name}` se usa más de una vez.',
      missing_variable_type:
        'El tipo de variable {count} debe tener la opción `name` definida como una cadena no vacía.',
      invalid_variable_type:
        'El nombre del tipo de variable `{name}` no es válido. No debe contener caracteres especiales.',
      duplicate_variable_type:
        'Los nombres de tipo de variable deben ser únicos, pero `{name}` se usa más de una vez.',
      date_field_type:
        'El tipo de campo Date obsoleto no es compatible con Sveltia CMS. Usa el tipo de campo DateTime con la opción `time_format:false` en su lugar.',
      unsupported_deprecated_option:
        'La opción obsoleta `{prop}` no es compatible con Sveltia CMS. Usa la opción `{newProp}` en su lugar.',
      allow_multiple:
        'La opción `allow_multiple` no es compatible con Sveltia CMS. Usa la opción `multiple` en su lugar, que por defecto es `false`.',
      invalid_list_field:
        'El campo List no puede tener las opciones `field`, `fields` y `types` juntas.',
      invalid_list_variable_type:
        'El tipo de variable del campo List no es válido. La opción `widget` está establecida en `{widget}` pero debe ser `object`.',
      invalid_object_field:
        'El campo Object no puede tener las opciones `fields` y `types` juntas.',
      object_field_missing_fields:
        'El campo Object debe tener definida la opción `fields` o `types`.',
      relation_field_invalid_collection:
        'La colección referenciada `{collection}` no es válida o no está definida.',
      relation_field_invalid_collection_file:
        'El archivo referenciado `{file}` no es válido o no está definido.',
      relation_field_missing_file_name:
        'La opción `file` debe estar definida para una relación con una colección de archivos.',
      relation_field_invalid_value_field:
        'El campo de valor referenciado `{field}` no es válido o no está definido.',
      unexpected: 'Error inesperado',
    },
    warning: {
      editorial_workflow_unsupported: 'El flujo editorial aún no es compatible con Sveltia CMS.',
      open_authoring_unsupported: 'La autoría abierta aún no es compatible con Sveltia CMS.',
      nested_collections_unsupported: 'Las colecciones anidadas aún no son compatibles con Sveltia CMS.',
      unsupported_ignored_option:
        'La opción `{prop}` no es compatible con Sveltia CMS. Será ignorada.',
    },
    compatibility_link:
      'Consulta las notas de compatibilidad para más detalles: https://sveltiacms.app/en/docs/migration/netlify-decap-cms#features-not-to-be-implemented',
  },

  // Backends
  local_backend: {
    indicator: 'Local',
    unsupported_browser:
      'El desarrollo local no es compatible con tu navegador. Usa Chrome o Edge en su lugar.',
    disabled: 'El desarrollo local está deshabilitado en tu navegador. <a>Aquí te explicamos cómo habilitarlo</a>.',
  },

  // Editorial Workflow
  status: {
    drafts: 'Borradores',
    in_review: 'En revisión',
    ready: 'Publicado',
  },
  workflow_action: {
    save_draft: 'Guardar borrador',
    submit_for_review: 'Enviar a revisión',
    set_draft: 'Mover a borrador',
    set_ready: 'Marcar como listo',
  },

  // Settings
  categories: 'Categorías',
  prefs: {
    changes: {
      api_key_saved: 'La clave API se ha guardado.',
      api_key_removed: 'La clave API se ha eliminado.',
    },
    error: {
      permission_denied:
        'El acceso al almacenamiento del navegador (Cookie) ha sido denegado. Verifica los permisos e inténtalo de nuevo.',
    },
    appearance: {
      title: 'Apariencia',
      theme: 'Tema',
      select_theme: 'Seleccionar tema',
      sidebar_logo: 'Logo de la barra lateral',
      sidebar_logo_description: 'URL personalizada del logo para la barra lateral. Déjalo vacío para usar el predeterminado.',
      logo_url_placeholder: 'https://ejemplo.com/logo.png',
      reset_logo: 'Restablecer predeterminado',
    },
    theme: {
      auto: 'Automático',
      dark: 'Oscuro',
      light: 'Claro',
    },
    language: {
      title: 'Idioma',
      ui_language: {
        title: 'Idioma de la interfaz',
        select_language: 'Seleccionar idioma',
      },
    },
    contents: {
      title: 'Contenidos',
      editor: {
        title: 'Editor',
        use_draft_backup: {
          switch_label: 'Guardar automáticamente copias de seguridad de borradores',
        },
        close_on_save: {
          switch_label: 'Cerrar el editor después de guardar un borrador',
        },
        close_with_escape: {
          switch_label: 'Cerrar el editor con la tecla Escape',
        },
      },
    },
    i18n: {
      title: 'Internacionalización',
      translators: {
        default: {
          title: 'Servicio de traducción predeterminado',
          select_service: 'Seleccionar servicio',
        },
        api_keys: {
          title: 'Claves API de servicios de traducción',
          description: 'Gestiona las claves API para <a>servicios de traducción</a>.',
        },
        field_label: 'Clave de {service}',
        description:
          'Regístrate en <a {homeHref}>{service}</a> e introduce <a {apiKeyHref}>tu clave API</a> aquí para habilitar la traducción rápida de campos de texto.',
      },
    },
    media: {
      title: 'Medios',
      stock_photos: {
        api_keys: {
          title: 'Claves API de servicios de fotos de stock',
          description: 'Gestiona las claves API para <a>servicios de fotos de stock</a>.',
        },
        field_label: 'Clave API de {service}',
        description:
          'Regístrate en la <a {homeHref}>API de {service}</a> e introduce <a {apiKeyHref}>tu clave API</a> aquí para insertar fotos de stock gratuitas en campos de imagen.',
        credit: 'Fotos proporcionadas por {service}',
      },
      cloud_storage: {
        api_keys: {
          title: 'Claves API de servicios de almacenamiento en la nube',
          description: 'Gestiona las claves API para <a>servicios de almacenamiento en la nube</a>.',
        },
        field_label: 'Clave API de {service}',
      },
      libraries_disabled: 'Las bibliotecas de medios externas están deshabilitadas por el administrador.',
    },
    accessibility: {
      title: 'Accesibilidad',
      underline_links: {
        title: 'Subrayar enlaces',
        description: 'Mostrar subrayado en los enlaces de la vista previa y las etiquetas de la interfaz.',
        switch_label: 'Subrayar siempre los enlaces',
      },
    },
    advanced: {
      title: 'Avanzado',
      beta: {
        title: 'Funciones beta',
        description: 'Habilitar algunas funciones beta que pueden ser inestables o no estar traducidas.',
        switch_label: 'Unirse al programa beta',
      },
      developer_mode: {
        title: 'Modo desarrollador',
        description:
          'Habilitar funciones orientadas a desarrolladores, incluyendo registros detallados en la consola y menús contextuales nativos.',
        switch_label: 'Habilitar modo desarrollador',
      },
      deploy_hook: {
        title: 'Hook de despliegue',
        description:
          'Introduce una URL de webhook que se llamará cuando actives manualmente un despliegue seleccionando Publicar cambios. Puedes dejar esto vacío si usas GitHub Actions.',
        url: {
          field_label: 'URL del hook',
          saved: 'La URL del hook se ha guardado.',
          removed: 'La URL del hook se ha eliminado.',
        },
        auth: {
          field_label: 'Cabecera de autorización (ej. Bearer <token>) (opcional)',
          saved: 'La cabecera de autorización se ha guardado.',
          removed: 'La cabecera de autorización se ha eliminado.',
        },
      },
    },
  },

  // Keyboard shortcuts
  keyboard_shortcuts_: {
    view_content_library: 'Ver biblioteca de contenido',
    view_asset_library: 'Ver biblioteca de archivos',
    search: 'Buscar entradas y archivos',
    create_entry: 'Crear una nueva entrada',
    save_entry: 'Guardar una entrada',
    cancel_editing: 'Cancelar edición de entrada',
  },

  // File types
  file_type_labels: {
    avif: 'Imagen AVIF',
    bmp: 'Imagen Bitmap',
    gif: 'Imagen GIF',
    ico: 'Icono',
    jpeg: 'Imagen JPEG',
    jpg: 'Imagen JPEG',
    png: 'Imagen PNG',
    svg: 'Imagen SVG',
    tif: 'Imagen TIFF',
    tiff: 'Imagen TIFF',
    webp: 'Imagen WebP',
    avi: 'Vídeo AVI',
    m4v: 'Vídeo MP4',
    mov: 'Vídeo QuickTime',
    mp4: 'Vídeo MP4',
    mpeg: 'Vídeo MPEG',
    mpg: 'Vídeo MPEG',
    ogg: 'Vídeo Ogg',
    ogv: 'Vídeo Ogg',
    ts: 'Vídeo MPEG',
    webm: 'Vídeo WebM',
    '3gp': 'Vídeo 3GPP',
    '3g2': 'Vídeo 3GPP2',
    aac: 'Audio AAC',
    mid: 'MIDI',
    midi: 'MIDI',
    m4a: 'Audio MP4',
    mp3: 'Audio MP3',
    oga: 'Audio Ogg',
    opus: 'Audio OPUS',
    wav: 'Audio WAV',
    weba: 'Audio WebM',
    csv: 'Hoja de cálculo CSV',
    doc: 'Documento Word',
    docx: 'Documento Word',
    odp: 'Presentación OpenDocument',
    ods: 'Hoja de cálculo OpenDocument',
    odt: 'Texto OpenDocument',
    pdf: 'Documento PDF',
    ppt: 'Presentación PowerPoint',
    pptx: 'Presentación PowerPoint',
    rtf: 'Documento de texto enriquecido',
    xls: 'Hoja de cálculo Excel',
    xlsx: 'Hoja de cálculo Excel',
    html: 'Texto HTML',
    js: 'JavaScript',
    json: 'Texto JSON',
    md: 'Texto Markdown',
    toml: 'Texto TOML',
    yaml: 'Texto YAML',
    yml: 'Texto YAML',
  },

  // file size units
  file_size_units: {
    b: '{size} bytes',
    kb: '{size} KB',
    mb: '{size} MB',
    gb: '{size} GB',
    tb: '{size} TB',
  },
};
