import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  state={
    showContactInfo:true,
  }
  onShowClick = (e) => {
   this.setState({
     showContactInfo:!this.state.showContactInfo
   })
  }
  render() {
    const{name,email,phone}=this.props;
    const{showContactInfo}=this.state;
    return (
        <div className="card card-body mb-3">
          <h4>
            {name}
            <i onClick={this.onShowClick} className="fas fa-sort-down"/>
          </h4>
          {
            showContactInfo?
          <ul className="list-group">
              <li className="list-group-item">Email:{email}</li>
              <li className="list-group-item">Phone:{phone}</li>
              </ul>
              :
              null
              }
          
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
