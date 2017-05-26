import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

@inject('router', 'base')
@withRouter
@observer
export default class App extends Component {
  render() {
    const { base } = this.props

    return (
      <div className="container">
        <h1>Hello</h1>
      </div>
    )
  }
}
