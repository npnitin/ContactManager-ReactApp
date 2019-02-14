import React, { Component } from 'react';
import { Consumer } from '../context/context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            phone:''
        }
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        const{ name ,email,phone}=this.state;
        const newContact={
            id:uuid(),
            name,
            email,
            phone
        };
        dispatch({type:'ADD_CONTACT',payload:newContact});
        //clear state
        this.setState({
            name:'',
            email:'',
            phone:''
        })
    }
    render() {
        const{name,email,phone}=this.state;
        return(
       <Consumer>
            {value=>{
                const{ dispatch } = value;
                return (
                    <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup
                                name="name"
                                label="Name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={this.onChange}
                                />
                                 <TextInputGroup
                                name="email"
                                label="Email"
                                placeholder="Enter email"
                                type="email"
                                value={email}
                                onChange={this.onChange}
                                />
                                 <TextInputGroup
                                name="phone"
                                label="Phone"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={this.onChange}
                                />
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                            </form>
                        </div>
                </div>
                )
            }}
           </Consumer>
        );
      
    }
}
export default AddContact;