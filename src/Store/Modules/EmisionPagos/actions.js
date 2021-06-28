export const SET_LOADING = 'SET_LOADING'
export const SET_DATOS_PASO_1 = 'SET_DATOS_PASO_1'
export const SET_CAMPOS_EPAGOS = 'SET_CAMPOS_EPAGOS'
export const SET_OPCIONES_EPAGOS = 'SET_OPCIONES_EPAGOS'
export const TOOGLE_SELECTED_OPCION_EPAGOS = 'TOOGLE_SELECTED_OPCION_EPAGOS'
export const SET_ARRAY_CORRESPONDENCIA = 'SET_ARRAY_CORRESPONDENCIA'
export const SEARCH_IN_CORRESPONDENCIA = 'SEARCH_IN_CORRESPONDENCIA'

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setDatosPaso1 = (payload) => ({
    type: SET_DATOS_PASO_1,
    payload
})

export const setCamposEpagos = (payload) => ({
    type: SET_CAMPOS_EPAGOS,
    payload
})

export const setOpcionesEpagos = (payload) => ({
    type: SET_OPCIONES_EPAGOS,
    payload
})

export const toogleSelectedOpcionEpagos = (payload) => ({
    type: TOOGLE_SELECTED_OPCION_EPAGOS,
    payload
})

export const setCorrespondencia = (camID, pcaID) => ({
    type: SET_ARRAY_CORRESPONDENCIA,
    payload: {
        camID,
        pcaID
    }
})

export const searchInCorrespondencia = (payload) => ({
    type: SEARCH_IN_CORRESPONDENCIA,
    payload
})
