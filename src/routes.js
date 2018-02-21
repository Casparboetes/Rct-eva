// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  BatchesContainer,
  StudentContainer,
  SignIn
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ BatchesContainer } />
        <Route path="/sign-in" component={ SignIn } />
        <Route path="/students/batch/:batchId" component={ StudentContainer } />
      </div>
    )
  }
}
