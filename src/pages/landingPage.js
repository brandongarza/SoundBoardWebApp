import React from 'react'
import Button from './Button';


const LandingPage=(props)=>{

    const skipButtonHandler=()=>{

    };
    
    return (
        <div>
            <h1>Sound Board</h1>
            <div>
                <button type = "button" onClick={skipButtonHandler} > SKip </button>
                <Button type = "button"> Login</Button>
            </div>
        </div>
    );
};
export default LandingPage;