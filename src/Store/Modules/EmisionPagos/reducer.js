import {
    SET_LOADING,
    SET_DATOS_PASO_1,
    SET_CAMPOS_EPAGOS,
    SET_OPCIONES_EPAGOS,
    TOOGLE_SELECTED_OPCION_EPAGOS,
    SET_ARRAY_CORRESPONDENCIA,
    SEARCH_IN_CORRESPONDENCIA,
} from './actions'

let defaultState = {
    loading: true,
    organismos: [],
    comprobantes: [],
    importaciones: [],
    bocetos: [],
    camposEpagos: [],
    opcionesEpagos: [],
    arrayCorrespondencia: [],
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_DATOS_PASO_1:
            return {
                ...state,
                organismos: action.payload.organismos.filter(item => item.orgEstado==='A'),
                comprobantes: action.payload.comprobantes.filter(item => item.comEstado==='A'),
                importaciones: action.payload.importacion,
                bocetos: action.payload.bocetos,
            }
        case SET_CAMPOS_EPAGOS:
            return {
                ...state,
                camposEpagos: action.payload,
                arrayCorrespondencia: action.payload.map(obj => ({camID: obj.camID, value: ''}))
            }
        case SET_OPCIONES_EPAGOS:
            return {
                ...state,
                opcionesEpagos: action.payload.map(obj => ({ ...obj, selected: false })),
            }
        case TOOGLE_SELECTED_OPCION_EPAGOS:
            const copiaOpcionesEpagos = [...state.opcionesEpagos]
            // const toogleOption =  copiaOpcionesEpagos.map(obj => obj.pcaID===action.payload ? ({ ...obj, selected: true }) : ({ ...obj }))
            const toogleOption =  copiaOpcionesEpagos.map(obj => obj.pcaID===action.payload ? ({ ...obj, selected: !obj.selected }) : ({ ...obj }))
            return {
                ...state,
                opcionesEpagos: toogleOption
            }
        case SET_ARRAY_CORRESPONDENCIA:
            const { camID, value } = action.payload
            const arrayCorrespondencia = state.arrayCorrespondencia.map( obj => (obj.camID===camID ? { ...obj, value } : { ...obj }))
            return {
                ...state,
                arrayCorrespondencia
            }
        case SEARCH_IN_CORRESPONDENCIA:
            const copyArrayCorrespondencia = [...state.arrayCorrespondencia]
            const copyOpcionesEpagos = [...state.opcionesEpagos]
            let ad
            const copiaArrayCorrespondencia = copyArrayCorrespondencia.map(obj => {
                if(obj.camID===action.payload) {
                    ad = obj.value
                    return { ...obj, value: ''}
                } else {
                    return { ...obj }
                }
            })

            const toOpt =  copyOpcionesEpagos.map(obj => obj.pcaID===ad ? ({ ...obj, selected: false }) : ({ ...obj }))
            return {
                ...state,
                arrayCorrespondencia: copiaArrayCorrespondencia,
                opcionesEpagos: toOpt,
            }
        default:
            return defaultState
    }
}