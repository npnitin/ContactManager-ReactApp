import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                  <Link to="/" className="nav-link">
                    <i className="fas fa-home"></i>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus"></i>Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about/Contact Manager" className="nav-link">
                  <i className="fas fa-question"></i>About
                  </Link>
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
