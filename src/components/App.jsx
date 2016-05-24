import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render () {
    return (
      <div>
        <h1 className="page-title">mxdsp</h1>
        <h2 className="page-sub-title">Front-End Developer</h2>
        <ul role="nav" className="horizontal menu">
        	<li className="float-right"><NavLink to="/" onlyActiveOnIndex><h1>Home</h1></NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})