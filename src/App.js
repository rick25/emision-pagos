import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import routes from './routes'

import ErrorVistaWrapper from './components/Error/ErrorVistaWrapper'
import Spinner from './components/Template/SpinnerPrincipal'
import './Style/main.scss'
import './Style/flex.scss'
import './App.css'

const App = () => {
  // const loggedIN = useSelector((state) => state.usuario.datos.loggedIN)
  const loggedIN = true
  return (
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s | Sistema de Impresiones"
        defaultTitle="Sistema de Impresiones"
      >
        <meta
          name="description"
          content="Administración de esquemas para la importacion de datos y generación de impresiones"
        />
      </Helmet>

      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(
            ({ component, layout: Layout, esperarDatos, ...rest }, index) => (
              <Route
                key={'route' + index}
                {...rest}
                render={(props) => {
                  const Child = ErrorVistaWrapper(component)

                  if (rest.publica || loggedIN) {
                    return (
                      <Layout esperarDatos={esperarDatos}>
                        <Child {...props} />
                      </Layout>
                    )
                  }

                  return (
                    <Redirect
                      to={{
                        pathname: '/login',
                        state: {
                          referrer: rest.path
                        }
                      }}
                    />
                  )
                }}
              />
            )
          )}
        </Switch>
      </Suspense>
    </div>
  )
}

export default App;
