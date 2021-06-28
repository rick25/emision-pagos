import { lazy } from 'react'
import MainLayout from './components/Template/MainLayout'

const EmisionPagos = lazy(() => import('./Views/EmisionPagos'))
const Error404 = lazy(() => import('./Views/Boceto/Error404'))

const routes = [
    {
        exact: true,
        path: '/emision-pagos',
        layout: MainLayout,
        component: EmisionPagos
    },
    {
        layout: MainLayout,
        component: Error404
    }
]

export default routes
