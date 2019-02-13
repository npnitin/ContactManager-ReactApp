import React, { Component } from 'react'

class AddContact1 extends Component {
    constructor(){
        super();
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
   
    onSubmit = (e) =>{
        e.preventDefault(); 
        const contact={
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value
        }
        console.log(contact);
    }
    static defaultProps={
        name:'Nitin Pawar',
        email:'achievers.nitin@gmail.com',
        phone:'444-444-4444'
    }
    render() {
        const{name,email,phone}=this.props;
        return (
        <div className="card mb-3">
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            className="form-control form-control-lg"
                            name="name"
                            placeholder="Enter your name.."
                            defaultValue={name}
                            ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input 
                            type="email" 
                            className="form-control form-control-lg"
                            name="email"
                            placeholder="Enter your email.."
                            defaultValue={email}
                            ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input 
                            type="text" 
                            className="form-control form-control-lg"
                            name="phone"
                            placeholder="Enter your phone.."
                            defaultValue={phone}
                            ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
        </div>
        )
    }
}
export default AddContact1;