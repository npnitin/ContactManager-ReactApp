import React, { Component } from 'react'

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
export default Contact;
