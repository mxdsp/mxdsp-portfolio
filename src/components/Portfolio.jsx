import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <ul>
          <li><NavLink to="/portfolio/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/portfolio/facebook/react">React</NavLink></li>
          <li><NavLink to="/portfolio/redux/react-redux">React Redux</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})