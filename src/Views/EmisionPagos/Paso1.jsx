import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Select, Typography, Button, Empty } from 'antd'
import { ContainerOutlined } from '@ant-design/icons'
import './Paso1.scss'

export const Paso1 = ({
  organismos = [],
  comprobantes = [],
  importaciones = [],
  bocetos = [],
  cambiarPaso = f => f,
  setOrganismo = f => f,
  setComprobante = f => f,
  setImportacion = f => f,
  organismo,
  comprobante,
  importacion
}) => {
  const [form] = Form.useForm()
  // const [boceto, setBoceto] = useState('')
  // const [comprobantesPorOrganismo, setComprobantesPorOrganismo] = useState([])
  // const [importacionesPorOrganismo, setImportacionesPorOrganismo] = useState([])
  // const [pdfGenerado, setPdfGenerado] = useState(false)
  // const [rutaPdf, setRutaPdf] = useState('')
  // const [imrPosicion, setImrPosicion] = useState(1)

  const [isNextDisabled, setIsNextDisabled] = useState(true)

  // si cambia el organismo, entonces se setea el comprobante y la importacion a null
  useEffect(() => {
    setComprobante(null)
    setImportacion(null)
  }, [organismo, setComprobante, setImportacion])

  // isNextDisabled es true si el organismo, el comprobante y la importacion son null
  useEffect(() => {
    // el paso es valido cuando el organismo, el comprobante y la importacion no son nulos
    let pasoValido = () => {
      if (!organismo || !comprobante || !importacion) return false
      return true
    }
    setIsNextDisabled(!pasoValido())
  }, [organismo, comprobante, importacion, setIsNextDisabled])

  // useEffect(() => {
  //   let posible = true
  //   if (posible && comprobantes.length > 0) {
  //     setComprobantesPorOrganismo([
	//       ...new Set(comprobantes.filter(c => c.orgID===organismo))
  //     ])
  //   }
  //   return () => {
  //     posible = false
  //   }
  // }, [comprobantes, setComprobantesPorOrganismo, organismo])

  // useEffect(() => {
  //   let posible = true
  //   if (posible && importaciones.length > 0) {
  //     setImportacionesPorOrganismo([
	//       ...new Set(importaciones.filter(c => (c.orgID!=null && c.imiEstado==='TERMINADO' && c.orgID===organismo)))
  //     ])
  //   }
  //   return () => {
  //     posible = false
  //   }
  // }, [importaciones, setImportacionesPorOrganismo, organismo])

  // const generarPrevisualizacion = () => {
  //   const posicion = imrPosicion - 1
  //   fetch(
  //     // `/api/bocetos/previsualizacion/generar?imiID=${importacion}&imrPosicion=${posicion}&bocetoID=${boceto}`,
  //     `/api/bocetos/previsualizacion/generar?imiID=${importacion}&imrPosicion=${posicion}&bocetoID=22`,
  //     { headers: authHeaders(token) }
  //   )
  //     .then(res => res.json())
  //     .then(response => {
  //       setPdfGenerado(true)
  //       setRutaPdf(response.data.ruta)
  //     })
  // }

  const formularioBusqueda = () => {
    return (
      <>
        <div className="margin-bottom-5">
          <Typography.Text strong>Seleccionar Boceto</Typography.Text>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={12} sm={12} md={12}>
            <Form.Item label="Organismo">
              <Select
                name="organismo"
                placeholder="Selecciona un organismo"
                value={organismo}
                onSelect={setOrganismo}
                onChange={setOrganismo}
                rules={[{ required: true, message: 'Ingrese un organismo' }]}
                allowClear
              >
                {organismos?.map(item =>
                  <Select.Option key={item.orgID} value={item.orgID}>
                    {`${item.orgDescripcion}`}
                  </Select.Option>
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12}>
            <Form.Item label="Comprobante">
              <Select
                name="comprobante"
                placeholder="Selecciona un comprobante"
                value={comprobante}
                onChange={setComprobante}
                onSelect={setComprobante}
                disabled={!organismo}
              >
                {comprobantes?.filter(item => item.orgID===organismo).map(item =>
                  <Select.Option key={item.comID} value={item.comID}>
                    {`${item.comDescripcion}`}
                  </Select.Option>
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12}>
            <Form.Item label="Importación">
              <Select
                name="importacion"
                placeholder="Seleccione una importación"
                value={importacion}
                onChange={setImportacion}
                onSelect={setImportacion}
                disabled={!organismo && !comprobante}
              >
                {importaciones?.filter(item => item.orgID===organismo && item.imiEstado==="TERMINADO").map(item =>
                  <Select.Option key={item.imiID} value={item.imiID}>
                    {`${item.imiDescripcion}`}
                  </Select.Option>
                )}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={12} sm={12} md={12}>
            <Form.Item label="Boceto">
              <Select
                name="boceto"
                placeholder="Seleccione un boceto"
                // onChange={() =>generarPrevisualizacion()}
                // onSelect={setBoceto}
                onChange={() => {console.log('previsualizar Boceto')}}
              >
                {bocetos?.map(item =>
                  <Select.Option key={item.bocetoID} value={item.bocetoID}>
                    {`${item.bocetoID}-${item.bocetoNombre}`}
                  </Select.Option>
                )}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </>
    )
  }
  return (
    <>
	    <Form
        layout={'vertical'}
        form={form}
        scrollToFirstError
      >
	      {formularioBusqueda()}
        <div className="sin-campos margin-top-4">
          <Empty
            image={<ContainerOutlined style={{ fontSize: 43 }} />}
            imageStyle={{
              marginTop: 38,
              height: 60,
              color: "#8c8c8c"
            }}
            description=""
          >
            <div style={{ marginTop: "-10px" }}>
              <div className="superior">No Seleccionaste un boceto aún</div>
              <div className="inferior">
                Selecciona un organismo y luego un boceto de las listas de arriba
              </div>
            </div>
          </Empty>
        </div>
        <div className="margin-top-6">
          <Button
            onClick={() => cambiarPaso(1)}
            type="primary"
            disabled={isNextDisabled}
          >
            Siguiente
          </Button>
        </div>
	    </Form>
    </>
  )
}

export default connect(
  state => ({
    organismos: state.datosPago.organismos,
    comprobantes: state.datosPago.comprobantes,
    importaciones: state.datosPago.importaciones,
    bocetos: state.datosPago.bocetos,
    camposEpagos: state.datosPago.camposEpagos,
  }),
  {}
)(Paso1)
