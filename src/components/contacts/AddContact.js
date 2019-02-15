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
            phone:'',
            errors:{}
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
        //check for validation
        if(name === ''){
            this.setState({
                errors:{name:'name is required'}
            });
            return;
        }
        if(email === ''){
            this.setState({
                errors:{email:'email is required'}
            });
            return;
        }
        if(phone === ''){
            this.setState({
                errors:{phone:'phone is required'}
            });
            return;
        }
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
            phone:'',
            errors:{}
        });

        //redirect to home
        this.props.history.push('/');
    }
    render() {
        const{name,email,phone,errors}=this.state;
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
                                error={errors.name}
                                />
                                 <TextInputGroup
                                name="email"
                                label="Email"
                                placeholder="Enter email"
                                type="email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                                />
                                 <TextInputGroup
                                name="phone"
                                label="Phone"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
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