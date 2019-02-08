import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.title}
          </a>
          <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
Header.defaultProps={
  title:'My App'
}
Header.prototypes={
  title:PropTypes.string.isRequired
}
const headingStyle={
  color:'red',
  fontSize:'50px'
}
export default Header;
