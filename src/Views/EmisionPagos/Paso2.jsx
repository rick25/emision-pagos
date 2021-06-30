import { useSelector } from 'react-redux'
import { Typography, Button } from 'antd'
// import { setOpcionesEpagos } from '../../Store/Modules/EmisionPagos/actions'
import FilaCampoEpagos from './FilaCampoEpagos'
import { useEffect, useState } from 'react'

export const Paso2 = ({ cambiarPaso }) => {
  // const [opcionesSeleccionables, setOpcionesSeleccionables] = useState([])
  const [ campos, setCampos ] = useState([])
  const [ opciones, setOpciones ] = useState([])
  const { camposEpagos, opcionesEpagos } = useSelector((state) => ({
    camposEpagos: state.datosPago.camposEpagos,
    opcionesEpagos: state.datosPago.opcionesEpagos,
  }))

  useEffect(() => {
    const campos = camposEpagos.map(item => ({
      ...item,
      eliminado: false,
      campoAsignado: null
    }))
    setCampos(campos)
  }, [camposEpagos])

  useEffect(() => {
    setOpciones(opcionesEpagos)
  }, [opcionesEpagos])

  const eliminarCampo = (pcaID) => {
    liberarOpcionEpagos(pcaID)
    const nuevosCampos = campos.filter(item => item.pcaID !== pcaID)
    setCampos(nuevosCampos)
  }

  const liberarOpcionEpagos = (pcaID) => {
    campos.forEach(item => {
      let camID = null
      if(item.pcaID===pcaID && item.campoAsignado) {
        camID = item.campoAsignado
        console.log(camID)
      }
    })
    console.log("El campo no tiene asignado un campo de Epagos")
    
    // aqui debo volver agregar esa opcion a las opciones disponibles para elegir (opcionesSeleccionables)
  }
  const asignarOpcionACampo = (pcaID, camID) => {
    campos.forEach(campo => {
      if(campo.pcaID === pcaID) {
        console.log("Se asigno al campo con pcaID :" + pcaID + " la opcion con camID :" + camID)
        campo.campoAsignado = camID
      }
    })
    console.log(campos)
    
    opciones.forEach(opcion => {
      // marco como seleccionada la opcion
      if(opcion.camID === camID) {
        console.log("Se marco la opcion con camID :" + camID + " como seleccionada")
        opcion.selected = true
      }
    })
    console.log(opciones)

    // filtro las opciones marcando en true la opcion de acuerdo al camID que pase
    const opcionesFiltered = opciones.filter(item => !item.selected)
    setOpciones(opcionesFiltered)
  }

  return (
    <>
      <div className="margin-bottom-5">
        <Typography.Text strong>Parámetros de la Emisión</Typography.Text>
      </div>
      <div>
        { campos.filter(item => !item.eliminado).map((item, index) => <FilaCampoEpagos key={index} dato={item} opcionesEpagos={opciones} eliminarCampo={eliminarCampo} asignarOpcionACampo={asignarOpcionACampo} />) }
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
