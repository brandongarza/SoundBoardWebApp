import React from 'react'
import Button from './Button';
import {GoogleLoginButton} from "react-social-login-buttons";

const Login=(props)=>{
    return(
        <div>
            <navbar>

            </navbar>
            <GoogleLoginButton onClick={() => alert("Hello")} />
            <form>
                <div>
                    <label>Username: </label> 

                </div>
            </form>
       </div>
    );
};

export default Login;