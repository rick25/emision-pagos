export const GUARDAR_DATOS_USUARIO = 'GUARDAR_DATOS_USUARIO'

export function guardarDatosUsuario(datos) {
  return {
    type: GUARDAR_DATOS_USUARIO,
    payload: datos
  }
}
