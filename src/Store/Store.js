import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import TemplateReducer from '../Store/Modules/Template/TemplateReducer.js'
import UsuarioReducer from '../Store/Modules/Usuario/UsuarioReducer.js'
import EmisionPagosReducer from "../Store/Modules/EmisionPagos/reducer"
export const history = createBrowserHistory()

export const store = createStore(
    combineReducers({
        template: TemplateReducer,
        usuario: UsuarioReducer,
        datosPago : EmisionPagosReducer,
        router: connectRouter(history)
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)