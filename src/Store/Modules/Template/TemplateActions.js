export const CAMBIAR_BREADCRUMB = 'CAMBIAR_BREADCRUMB'
export const CAMBIAR_TITULO = 'CAMBIAR_TITULO'
export const CAMBIAR_SUBTITULO = 'CAMBIAR_SUBTITULO'
export const CAMBIAR_RIGHT = 'CAMBIAR_RIGHT'

export function cambiarBreadcrumb(breadcrumb){
    return {
        type: CAMBIAR_BREADCRUMB,
        payload: breadcrumb
    }
}

export function cambiarTitulo(titulo){
  return {
      type: CAMBIAR_TITULO,
      payload: titulo
  }
}

export function cambiarSubtitulo(subtitulo) {
  return {
    type: CAMBIAR_SUBTITULO,
    payload: subtitulo
  }
}

export function cambiarRight(right) {
  return {
    type: CAMBIAR_RIGHT,
    payload: right
  }
}
