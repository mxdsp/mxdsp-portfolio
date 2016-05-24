import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { App, About, Contact, Home, Portfolio, Repo } from './components'

// Application CSS
require('style!css!sass!applicationStyles')

// Load foundation
$(document).foundation();

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/portfolio" component={Portfolio}>
        <Route path="/portfolio/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('root'))