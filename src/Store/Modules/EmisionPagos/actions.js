export const SET_LOADING = 'SET_LOADING'
export const SET_DATOS_PASO_1 = 'SET_DATOS_PASO_1'
export const SET_CAMPOS_EPAGOS = 'SET_CAMPOS_EPAGOS'
export const SET_OPCIONES_EPAGOS = 'SET_OPCIONES_EPAGOS'
export const TOOGLE_SELECTED_OPCION_EPAGOS = 'TOOGLE_SELECTED_OPCION_EPAGOS'
export const SET_ARRAY_CORRESPONDENCIA = 'SET_ARRAY_CORRESPONDENCIA'
export const SEARCH_IN_CORRESPONDENCIA = 'SEARCH_IN_CORRESPONDENCIA'

export function setLoading(payload) {
    return { type: SET_LOADING, payload }
}

export function setDatosPaso1(payload) {
    return { type: SET_DATOS_PASO_1, payload }
}

export function setCamposEpagos(payload) {
    return { type: SET_CAMPOS_EPAGOS, payload }
}

export function setOpcionesEpagos(payload) {
    return { type: SET_OPCIONES_EPAGOS, payload }
}

export function toogleSelectedOpcionEpagos(payload) {
    return { type: TOOGLE_SELECTED_OPCION_EPAGOS, payload }
}

export function setCorrespondencia(camID, pcaID) {
    return { type: SET_ARRAY_CORRESPONDENCIA, payload: {
        camID, pcaID
    }}
}

export function searchInCorrespondencia(payload) {
    return { type: SEARCH_IN_CORRESPONDENCIA, payload }
}
