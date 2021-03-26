import React from "react"
import axios from 'axios'







export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''
        }
        this.changeUsername=this.changeUsername.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const registered={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post( 'http://localhost:3000/user/reg',registered)
        .then(response => console.log(response.data))

        this.setState({
            username:'',
            email:'',
            password:''
        })
        
    }
    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">
                Register
            </div>
            <div className="content">
                <div className="form">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" 
                        onChange={this.changeUsername}
                        value={this.state.username}/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"
                        onChange={this.changeEmail}
                        value={this.state.email}/>
                        
                    </div>
               
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"
                        onChange={this.changePassword}
                        value={this.state.password}/>
                        
                    </div>
                   
                    </form>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onSubmit={this.onSubmit}>Register</button>
            </div>
           
       
        </div>
        );
    }
   
}
