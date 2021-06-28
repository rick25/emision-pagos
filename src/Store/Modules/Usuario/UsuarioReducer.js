import {GUARDAR_DATOS_USUARIO} from './UsuarioActions'

let datos = JSON.parse(localStorage.getItem('datosUsuario'))

let defaultState = {
  datos: datos ? datos : {}
}

const Reducers = (state = defaultState, action) => {
  switch(action.type){
    case GUARDAR_DATOS_USUARIO:
      localStorage.setItem('datosUsuario', JSON.stringify(action.payload))
      return {
        ...state,
        datos: action.payload
      }
    default:
      return state
  }
}

export default Reducers
