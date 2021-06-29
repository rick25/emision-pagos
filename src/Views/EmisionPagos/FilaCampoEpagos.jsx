import React, { useEffect, useState } from 'react'
import { Row, Col, Input, Form, Popconfirm, Select, InputNumber, Radio } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { } from '../../Store/Modules/EmisionPagos/actions'
import { connect } from 'react-redux'
import { toogleSelectedOpcionEpagos, setCorrespondencia, searchInCorrespondencia } from '../../Store/Modules/EmisionPagos/actions'

const FilaCampoEpagos = ({
  dato = {},
  opcionesEpagos = [],
  arrayCorrespondencia = [],
  toogleSelectedOpcionEpagos = f => f,
  setCorrespondencia = f => f,
  searchInCorrespondencia = f => f,
}) => {
  const [opcionesSelect, setOpcionesSelect] = useState([])

  useEffect(() => {
    setOpcionesSelect(opcionesEpagos
      .filter(opt => opt.selected === false)
      .map(({pcaID, pcaDescripcion}) => (
        <Select.Option key={pcaID} value={pcaID}>
          {pcaDescripcion}
        </Select.Option>
      ))
    )
    /*
    setArrayCorrespondencia(opcionesEpagos
      .map(({pcaID}) => {
        return { pcaID:}
      })
    )
    */
  }, [opcionesEpagos])

  const changeOptions = (value, camID) => {
    // cada vez q se  cambia  el valor de un select voy a guardar en el state un array 
    // [{camID: 1, value: x}, {camID: 3, value: x}, {camID: 8, value: x}, {camID: 2, value: x}, {camID: 19, value: x}]
    // de manera que si el valor es undefined y se cambia el selected de true a false
    if(value) {
      // se  cambia  el arrayCorrespondencia
      setCorrespondencia(camID, value)
      // se cambia a seleccionada la opcion
      toogleSelectedOpcionEpagos(value)
    } else {
      searchInCorrespondencia(camID)
    }
  }

  const changeOption = (value, camID) => {
    value && console.log(`Valor: ${value}, camID : ${camID}`)
    setCorrespondencia(camID, value)
  }

  const {camDescripcion, camNombre, camObligatorio, camTipo, camID} = dato

  return (
    <>
      <Row gutter={24} className="margin-bottom-1">
        <Col md={12}>
          <div style={{ flexShrink: 1 }}>
            <div>{camDescripcion}</div>
          </div>
        </Col>
      </Row>
      <Row gutter={24} className="margin-bottom-2 margin-right-2">
        <Col md={6}>
          <Form.Item
            hasFeedback
            labelCol={{ span: 18 }}
            validateStatus={'success'}
          >
            <Input placeholder={"Nombre"} value={camNombre} />
          </Form.Item>
        </Col>
        <Col md={3} className="margin-top-4 margin-left-8">
          {camObligatorio==='N' && <div className="btn-quitar-fila">
            <Popconfirm
              title="¿Querés eliminar este campo?"
              okText="Si"
              cancelText="No"
              // onConfirm={() => quitarParametroEmision(campo)}
            >
              <CloseCircleOutlined />
            </Popconfirm>
          </div>
          }
        </Col>
        <Col md={9}>
          {camTipo==='INTEGER'
            ?
              <InputNumber
                style={{ width: '100%' }}
                min={1}
                onChange={e => changeOption(e, camID)}
                allowClear
              >
              </InputNumber>
            :
              camTipo==='VARCHAR'
              ?
                <Select
                  style={{ width: '100%' }}
                  name={camID}
                  placeholder="Elija un valor"
                  onChange={e => changeOptions(e, camID)}

                  rules={[
                    {
                      required: true,
                      message: 'Complete este campo para continuar'
                    }
                  ]}
                  allowClear
                >
                  {opcionesSelect}
                </Select>
              :
                <Radio.Group
                  // onChange={e => changeOption(e, camNombre)}
                  // onChange={onChange}
                  // value={value}
                >
                  <Radio value={1}>Si</Radio>
                  <Radio value={0}>No</Radio>
                </Radio.Group>
                // <Select
                //   style={{ width: '100%' }}
                //   placeholder="Si o No"
                //   onChange={e => changeOption(e, camNombre)}
                //   // defaultValue={camID}
                //   allowClear
                // >
                //   {['No', 'Si'].map((value, index) =>
                //     <Select.Option
                //       key={index}
                //       value={index}
                //     >
                //       {value}
                //     </Select.Option>
                //   )}
                // </Select>
          }
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  opcionesEpagos: state.datosPago.opcionesEpagos,
  arrayCorrespondencia: state.datosPago.arrayCorrespondencia,
})

const mapDispatchToProps = {
  toogleSelectedOpcionEpagos,
  setCorrespondencia,
  searchInCorrespondencia,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilaCampoEpagos)