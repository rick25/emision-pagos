import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Button } from 'antd'
import { postHeaders } from '../../Hooks'
import { setOpcionesEpagos } from '../../Store/Modules/EmisionPagos/actions'
import FilaCampoEpagos from './FilaCampoEpagos'

export const Paso2 = ({
  camposEpagos = null,
  opcionesEpagos = [],
  token = '',
  importacion = '',
  cambiarPaso = f => f,
  setOpcionesEpagos = f => f,
}) => {
  // const [seleccionados, setSeleccionados] = useState([])

  // 
  useEffect(() => {
      fetch(`/api/importaciones/${importacion}`, { headers: postHeaders(token) })
        .then(res => res.json())
        .then(res => {
          setOpcionesEpagos(res)
        })
  }, [token, importacion, setOpcionesEpagos])

  return (
    <>
      <div className="margin-bottom-5">
        <Typography.Text strong>Parámetros de la Emisión</Typography.Text>
      </div>
      <div>
        {
          camposEpagos && camposEpagos.map((item, index) => {
            return(
              <FilaCampoEpagos
                key={index}
                dato={item}
                opcionesEpagos={opcionesEpagos}
              />
            )
          })
        }
      </div>
      <div className="margin-top-6">
        <Button
          style={{ marginRight: "12px" }}
          onClick={() => cambiarPaso(-1)}
        >
          Anterior
        </Button>
        <Button
          onClick={() => cambiarPaso(1)}
          type="primary"
        >
          Siguiente
        </Button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  token: state.usuario.datos.token,
  camposEpagos: state.datosPago.camposEpagos,
  opcionesEpagos: state.datosPago.opcionesEpagos,
})

const mapDispatchToProps = {
  setOpcionesEpagos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Paso2)
