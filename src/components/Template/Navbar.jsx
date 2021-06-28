import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';

import { authHeaders } from '../../Hooks'
import { guardarDatosUsuario } from '../../Store/Modules/Usuario/UsuarioActions'

import './Navbar.scss'

/**
 * Barra superior del mainlayout
 */

class Navbar extends Component {
  cerrarSesion = () => {
    fetch('/api/autentificacion/salir', {
      method: 'POST',
      headers: authHeaders(this.props.token)
    })
      .then(this.props.guardarDatosUsuario({}))
  }

  render() {
    const menu = (
      <Menu >
        <Menu.Item onClick={this.cerrarSesion}>Cerrar Sesion</Menu.Item>
      </Menu>
    )
    return (
      <>
        <Layout.Header className='site-layout-background comp-navbar'  style={{ padding: 0 }}>
          <div className="d-flex justify-content-between sector-toggle">
            <span onClick={this.props.toggleSider} className='toggle-cerrado'>
              {this.props.cerrado ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
            <Dropdown overlay={menu} trigger={['click']}>
              <div className="d-flex" style={{ marginRight: '20px' }}>
                <div>
                  <Avatar style={{ backgroundColor: '#8d471b' }}>U</Avatar>
                </div>
                <span style={{  marginLeft: '10px', marginRight: '10px' }}>
                  {this.props.usuNombre}
                </span>
                <div className="d-inline">
                  <DownOutlined />
                </div>
              </div>
            </Dropdown>
          </div>
        </Layout.Header>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  usuNombre: state.usuario.datos.usuNombre,
  token: state.usuario.datos.token
})

export default connect(mapStateToProps, {guardarDatosUsuario})(withRouter(Navbar))
