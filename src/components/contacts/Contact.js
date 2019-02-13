import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context/context';
class Contact extends Component {
  state={
    showContactInfo:true,
  }
  onShowClick = (e) => {
   this.setState({
     showContactInfo:!this.state.showContactInfo
   })
  }
  onDeleteClick = (id,dispatch) =>{
    dispatch({type:'DELETE_CONTACT',payload:id})
  }
  render() {
    const{contact}=this.props;
    const{showContactInfo}=this.state;

    return (
      <Consumer>
        {value=>{
          const{dispatch}=value;
          return(
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor:'pointer'}}/>
                <i className="fas fa-times" style={{cursor:'pointer',float:'right',color:'red'}} onClick={this.onDeleteClick.bind(this,contact.id,dispatch)}/>
              </h4>
              {
                showContactInfo?<ul className="list-group">
                  <li className="list-group-item">Email:{contact.email}</li>
                  <li className="list-group-item">Phone:{contact.phone}</li>
                  </ul>:null
                }
              
            </div>
          )
        }}
        </Consumer>
        
    )
  }
}
Contact.prototypes={
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired
}
export default Contact;
