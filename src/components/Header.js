import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <div>
      <h1 style={headingStyle}>{props.title}</h1>
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
