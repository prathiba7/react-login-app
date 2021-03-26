import React from "react"
import axios from 'axios'

export class home extends React.Component{

    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">
               Welcome home
            </div>
            <div className="content">
                <div className="form">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">texas</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <h1>Welcome home</h1>
                   
               
                    
                   
                   
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onSubmit={this.onSubmit}>Register</button>
            </div>
           
       
        </div>
        );
    }
}