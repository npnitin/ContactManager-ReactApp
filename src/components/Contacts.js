import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  constructor(){
    super();
    this.state={
      contacts:[
        {
          id:1,
          name:'John Doe',
          email:'jdoe@gmail.com',
          phone:'444-444-4444'
        },
        {
          id:2,
          name:'Caren willinams',
          email:'Caren@gmail.com',
          phone:'555-555-5555'
        },
        {
          id:3,
          name:'Peter Henry',
          email:'phenry@gmail.com',
          phone:'999-999-9999'
        }
      ]
    }
  }
  deleteContact = (id) => {
    const{ contacts } = this.state;
    const newContacts = contacts.filter(contact=> contact.id!==id);
    this.setState({
      contacts:newContacts
    })
    
  }
  render() {
    const{contacts}=this.state;
    return (
      <React.Fragment>
        {contacts.map(contact=>(
          <Contact 
          key={contact.id}
          name={contact.name} 
          email={contact.email} 
          phone={contact.phone}
          deleteClickHandler={this.deleteContact.bind(this,contact.id)}
          />
        ))}
      </React.Fragment>
    )
  }
}
export default Contacts;
