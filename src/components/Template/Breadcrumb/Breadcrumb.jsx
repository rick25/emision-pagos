import React, { Component } from 'react'
import { Breadcrumb as BC } from 'antd'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeOutlined } from '@ant-design/icons'
import './Breadcrumb.scss'

const mapStateToProps = (state) => {
  return {
    items: state.template.breadcrumb
  }
}

class Breadcrumb extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="comp-breadcrumb">
        <BC>
          {this.props.items && this.props.items.length > 0 &&
          <BC.Item key='home'>
          <Link to='/'><HomeOutlined /></Link>
          </BC.Item>
          }

          {this.props.items.map(item => {
            return (
              <BC.Item key='home'>
                {item.url ? <Link to={item.url}>{item.nombre}</Link> : <span>{item.nombre}</span>}
              </BC.Item>
            )
          })}
        </BC>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Breadcrumb)
