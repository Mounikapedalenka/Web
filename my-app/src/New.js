import React from "react";
import './New.css';
class New extends React.Component{
    render(){
        return(
            <div id="wel">
                <center><h1>welcome</h1></center>
                <hr></hr>
                <br></br>
                <center><a href="Signup" id="sign">Signup</a> Do you have an Account ?? Login here:<a href="Login" id="lg">Login</a></center>
            </div>
        );
    }
}
export default New;