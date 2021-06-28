import React from 'react'
import { connect } from 'react-redux'
import { Row, Typography, Space } from 'antd'

function Titulo({ titulo = '', subtitulo = '', Right }) {
  return (
    <Row justify="space-between">
      <Space direction="vertical" className="comp-titulo">
        {titulo ? <Typography.Text strong>{titulo}</Typography.Text> : <></>}
        {subtitulo ? <Typography.Text>{subtitulo}</Typography.Text> : <></>}
      </Space>
      {Right ? <Right /> : <></>}
    </Row>
  )
}

const mapStateToProps = state => ({
  titulo: state.template.titulo,
  subtitulo: state.template.subtitulo,
  Right: state.template.right
})

export default connect(mapStateToProps)(Titulo)
