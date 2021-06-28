import React, { Component } from 'react'
import { Steps } from 'antd'

export default class PasosEmision extends Component {
  estado = (paso) => {
    if (paso < this.props.paso) {
      return 'finish'
    } if (paso === this.props.paso) {
      return "process"
    }
    return "wait"
  }

  render() {
    return (
      <div style={{ minHeight: '50px' }}>
        <Steps
          current={this.props.paso}
          size="medium"
        >
          <Steps.Step status={this.estado(0)} title="Seleccionar Importación" />
          <Steps.Step status={this.estado(1)} title="Parámetros de la Emisión" />
          <Steps.Step status={this.estado(2)} title="Emitir" />
        </Steps>
      </div>

    )
  }
}