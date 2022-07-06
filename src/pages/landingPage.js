import React from 'react'
// import {GoogleLoginButton} from "react-social-login-buttons";
// import Button from './Button';


const LandingPage=(props)=>{

    const skipButtonHandler=()=>{

    };
    
    return (
        <div>
            <h1>Sound Board</h1>
            <div>
                <button type = "button" onClick={skipButtonHandler} > SKip </button>
                <button type = "button"> Login</button>
            </div>
        </div>
    );
};
export default LandingPage;