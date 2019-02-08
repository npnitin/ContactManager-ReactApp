import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  render() {
    const{name,email,phone}=this.props;
    return (
      <div>
         <h3>Name:{name}</h3>
        <ul>
            <li>Email:{email}</li>
            <li>Phone:{phone}</li>
            </ul>
      </div>
    )
  }
}
Contact.prototypes={
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired,
}
export default Contact;
