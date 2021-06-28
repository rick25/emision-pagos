import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import {
  ImportOutlined,
  BgColorsOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link, NavLink, withRouter, matchPath } from 'react-router-dom'

import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Titulo from './Titulo'
import './MainLayout.scss'
import logo from '../../Resources/Images/logo.png'
import TransicionVista from '../Transiciones/TransicionVista'

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cerrado: false,
      mostrarTexto: true,
      vistaResponsive: false
    }
  }

  toggleSider = () => {
    if (!this.state.cerrado) {
      this.setState({ cerrado: true, mostrarTexto: false })
    } else {
      this.setState({ cerrado: false })
      setTimeout(() => {
        this.setState({ mostrarTexto: true })
      }, 300)
    }
  }

  render() {
    const { location } = this.props
    const rutaBase = [
      { ruta: '/plantillas', key: 'plantillas' },
      { ruta: '/admin/panel', key: 'admin-panel' },
      { ruta: '/bocetos/', key: 'boceto' },
      { ruta: '/importaciones/', key: 'importaciones' },
      { ruta: '/comprobantes/', key: 'comprobantes' },
      { ruta: '/emision-pagos/', key: 'emision-pagos' },
    ].find(e =>
      matchPath(location.pathname, {
        path: e.ruta,
        exact: false,
        strict: false
      })
    )
    const claveBase =
      rutaBase && typeof rutaBase.key !== 'undefined' ? [rutaBase.key] : []

    return (
      <>
        <Layout className="comp-main-layout" style={{ height: '100%' }}>
          <Layout.Sider
            trigger={null}
            breakpoint="lg"
            collapsedWidth={this.state.vistaResponsive ? 0 : 'auto'}
            collapsible
            className="sider-principal"
            collapsed={this.state.cerrado}
            onBreakpoint={broken => {
              this.setState({ cerrado: broken, vistaResponsive: broken })
            }}
          >
            <div className="logo">
              <img
		        alt=""
                style={{
                  height: '100%',
                  verticalAlign: 'inherit',
                  margin: this.state.cerrado ? '0 auto' : 'initial'
                }}
                src={logo}
              />
              {!this.state.cerrado && (
                <Link className="fuente-logo" to="/">
                  Impresiones
                </Link>
              )}
            </div>
            <Menu
              selectable={false}
              selectedKeys={claveBase}
              theme="dark"
              mode={'inline'}
            >
              <Menu.Item key="plantillas">
                <NavLink
                  activeClassName="active"
                  isActive={this.seleccionar}
                  to={'/plantillas'}
                >
                  <span>
                    <UnorderedListOutlined className="" />
                    <span>Plantillas</span>
                  </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="importaciones">
                <NavLink
                  activeClassName="active"
                  isActive={this.seleccionar}
                  to={'/importaciones'}
                >
                  <span>
                    <ImportOutlined className="" />
                    <span>Importaciones</span>
                  </span>
                </NavLink>
              </Menu.Item>

              <Menu.SubMenu
                key="bocetos"
                title={
                  <span>
                    <BgColorsOutlined className="" />
                    <span>Bocetos</span>
                  </span>
                }
              >
                <Menu.Item key="edicion-boceto">
                  <Link to={'/bocetos/edicion'}>
                    <span>Edición de bocetos</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="ver-bocetos">
                  <Link to={'/bocetos/administracion'}>
                    <span>Administrar bocetos</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.Item key="comprobantes">
                <NavLink
                  activeClassName="active"
                  isActive={this.seleccionar}
                  to={'/comprobantes'}
                >
                  <span>
                    <ImportOutlined className="" />
                    <span>Comprobantes</span>
                  </span>
                </NavLink>
              </Menu.Item>

              <Menu.Item key="emision-pagos">
                <NavLink
                  activeClassName="active"
                  isActive={this.seleccionar}
                  to={'/emision-pagos'}
                >
                  <span>
                    <UploadOutlined />
                    <span>Emision Pagos</span>
                  </span>
                </NavLink>
              </Menu.Item>

              <Menu.SubMenu
                key="panel-admin"
                title={
                  <span>
                    <UsergroupAddOutlined className="" />
                    <span>Administrador</span>
                  </span>
                }
              >
                <Menu.Item key="ver-usuarios">
                  <Link to={'/admin/panel/usuarios'}>
                    <span>Administrar usuarios</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="ver-roles">
                  <Link to={'/admin/panel/roles'}>
                    <span>Administrar roles</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>

          <Layout>
            <Navbar
              cerrado={this.state.cerrado}
              toggleSider={this.toggleSider}
            />
            <Layout.Content
              style={{
                height: 'inherit',
                minHeight: 'initial'
              }}
            >
              <TransicionVista esperarDatos={this.props.esperarDatos}>
                <div className="comp-cuadro-titulo">
                  <Breadcrumb />
                  <div className="sector-titulo">
                    <Titulo />
                  </div>
                </div>
                <div className="vista-main">{this.props.children}</div>
              </TransicionVista>
            </Layout.Content>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default withRouter(MainLayout)
