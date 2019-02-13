import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context/context';
class Contacts extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <Consumer>
        {
          value => {
          const { contacts } = value;
          return(
            <React.Fragment>
              {contacts.map(contact=>(
                <Contact 
                key={contact.id}
                contact={contact} 
                />
              ))}
            </React.Fragment>
          )
        }}
        </Consumer>
    )
    
  }
}
export default Contacts;
