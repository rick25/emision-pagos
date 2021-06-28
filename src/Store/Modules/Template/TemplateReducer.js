import {
  CAMBIAR_BREADCRUMB,
  CAMBIAR_TITULO,
  CAMBIAR_SUBTITULO,
  CAMBIAR_RIGHT
} from './TemplateActions'

let defaultState = {
  breadcrumb: [],
  titulo: '',
  subtitulo: '',
  right: null
}

const Reducers = (state = defaultState, action) => {
  switch (action.type) {
    case CAMBIAR_BREADCRUMB:
      return {
        ...state,
        breadcrumb: action.payload
      }
    case CAMBIAR_TITULO:
      return {
        ...state,
        titulo: action.payload
      }
    case CAMBIAR_SUBTITULO:
      return {
        ...state,
        subtitulo: action.payload
      }
    case CAMBIAR_RIGHT:
      return {
        ...state,
        right: action.payload
      }
    default:
      return state
  }
}

export default Reducers
