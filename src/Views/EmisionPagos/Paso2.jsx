import { useSelector } from 'react-redux'
import { Typography, Button } from 'antd'
// import { setOpcionesEpagos } from '../../Store/Modules/EmisionPagos/actions'
import FilaCampoEpagos from './FilaCampoEpagos'

export const Paso2 = ({ cambiarPaso }) => {
  // const [seleccionados, setSeleccionados] = useState([])
  const { camposEpagos, opcionesEpagos } = useSelector((state) => ({
    camposEpagos: state.datosPago.camposEpagos,
    opcionesEpagos: state.datosPago.opcionesEpagos,
  }))

  return (
    <>
      <div className="margin-bottom-5">
        <Typography.Text strong>Parámetros de la Emisión</Typography.Text>
      </div>
      <div>
        { camposEpagos.map((item, index) => <FilaCampoEpagos key={index} dato={item} opcionesEpagos={opcionesEpagos} />) }
      </div>
      <div className="margin-top-6">
        <Button style={{ marginRight: "12px" }} onClick={() => cambiarPaso(-1)}>
          Anterior
        </Button>
        <Button onClick={() => cambiarPaso(1)} type="primary">
          Siguiente
        </Button>
      </div>
    </>
  )
}

export default Paso2
