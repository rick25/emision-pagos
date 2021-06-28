import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PubSub from 'pubsub-js'
import SpinnerPrincipal from '../Template/SpinnerPrincipal'

export const EVENTO_TERMINAR_TRANSICION = 'EVENTO_TERMINAR_TRANSICION'

/**
 * Componente que aplica un transicion cuando una vista sale/entra
 * si a la ruta se le pasa la prop esperarDatos la vista tiene que
 * llamar manualmente a props.terminarTransicion para que
 * termine el loader.
 */
class TransicionVista extends Component {
  constructor(props) {
    super(props)

    this.state = {
      esperarDatos: this.props.esperarDatos,
      cambioRuta: true,
    }

    PubSub.subscribe(EVENTO_TERMINAR_TRANSICION, () => {
      this.setState({ esperarDatos: false, cambioRuta: false })
    })

    this.props.history.listen(() => {
      this.setState({ cambioRuta: true })
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ esperarDatos: nextProps.esperarDatos ? true : false })
  }

  render() {
    let mostrarVista = {
      opacity: 1,
      transition: {
	ease: 'easeInOut',
	delay: 0.33
      }
    }

    const active = this.state.esperarDatos ? {} : mostrarVista

    const animation = {
      initial: { opacity: 0 },
      active: active,
      exit: { opacity: 0 },
    }

    return (
      <AnimatePresence>
	<div style={{ height: '100%', position: 'relative' }}>
	  <motion.div>
	    {this.state.esperarDatos && this.state.cambioRuta && <SpinnerPrincipal />}
	  </motion.div>
	  <motion.div
	    key={this.props.location.key}
	    initial={animation.initial}
	    animate={animation.active}
	    transition={{ duration: 0.43 }} exit={animation.exit}
	  >
	    {this.props.children}
	  </motion.div>
	</div>
      </AnimatePresence>
    )
  }
}
export default withRouter(TransicionVista)
