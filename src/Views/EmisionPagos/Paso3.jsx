import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

export const Paso3 = ({
  cambiarPaso = f => f,
}) => {
  const emitir = () => {
    console.log('emitir')
  }
  return (
    <>
      <h2>Emitir</h2>
      <div className="margin-top-6">
        <Button
        style={{ marginRight: "12px" }}
          onClick={() => cambiarPaso(-1)}
        >
          Anterior
        </Button>
        <Button
          onClick={emitir}
          type="primary"
        >
          Emitir
        </Button>
      </div>
    </>
  )
}

// Paso3.propTypes = {
//     props: PropTypes
// }

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Paso3)
