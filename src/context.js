import React,{Component} from 'react';

const Context = React.createContext();

export class Provider extends Component{
    state={
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

      render(){
          return(
              <Context.Provider value={this.state}>
                {this.props.children}
              </Context.Provider>
          )
      }
}

export const Consumer = Context.Consumer;