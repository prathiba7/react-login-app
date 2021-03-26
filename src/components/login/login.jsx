import React from "react"
import axios from 'axios'
import {home} from './home'
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
         
            password:''
        }
        this.changeUsername=this.changeUsername.bind(this)
       
        this.changePassword=this.changePassword.bind(this)
        this.onClick=this.onClick.bind(this)
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onClick(event){
        <home containerRef={ref => (this.current = ref)} />
        event.preventDefault()
        const login={
            username:this.state.username,
            
            password:this.state.password
        }

        axios.post( 'http://localhost:3000/user/login',login)
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
                Login
            </div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"
                          onChange={this.changeUsername}
                          value={this.state.username}/>
                      
                        
                    </div>
               
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" nChange={this.changePassword}
                        value={this.state.password} placeholder="password"/>
                        
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.onClick}>Login</button>
            </div>
        </div>
        );
    }
   
}



