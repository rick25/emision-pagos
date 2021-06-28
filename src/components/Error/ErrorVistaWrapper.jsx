import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  cambiarBreadcrumb,
  cambiarTitulo,
  cambiarSubtitulo,
  cambiarRight
} from '../../Store/Modules/Template/TemplateActions'
import PubSub from 'pubsub-js'
import { EVENTO_TERMINAR_TRANSICION } from '../Transiciones/TransicionVista'
import './ErrorVistaWrapper.scss'

/**
 * Componente que muestra un mensaje de error cuando
 * un componente hijo tiene un error de renderizado
 */
export default function ErrorVistaWrapper(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = { hayError: false }
    }

    componentDidCatch(error, info) {
      this.setState({ hayError: true })
    }

    render() {
      const NewComponent = connect(null, {
        cambiarBreadcrumb,
        cambiarTitulo,
        cambiarSubtitulo,
        cambiarRight
      })(WrappedComponent)

      if (this.state.hayError) {
        return (
          <div className="comp-error-vista">
            <div className="mensaje">Hubo un error al mostrar la página</div>
          </div>
        )
      }

      return (
        <NewComponent
          {...this.props}
          terminarTransicion={() => PubSub.publish(EVENTO_TERMINAR_TRANSICION)}
        />
      )
    }
  }
}
