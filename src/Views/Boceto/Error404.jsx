import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './Error404.scss'

export default class Error404 extends Component {
  constructor(props){
    super(props)
    this.props.cambiarBreadcrumb([])
  }
  render() {
    return (
      <div className="comp-error404">
        <Helmet>
          <title>Página no encontrada</title>
          <meta name="description" content="Página no encontrada" />
        </Helmet>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
      </div>
    )
  }
}
