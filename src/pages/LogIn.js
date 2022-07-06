import React from 'react'

const Login=(props)=>{
    return(

        <div className = "loginForm">
            
            <form>
                <div className='sign-in'> 
                    <label> USERNAME: </label>
                    <input type= "text" name = "u-name" required />
                </div>

                <div className='sign-in'> 
                    <label> PASSWORD: </label>
                    <input type= "text" name = "password" required />
                </div>

                <div className = "submit-button">
                    <button type="submit" value="Submit">Submit</button>
                </div>
            </form>
       </div>
    );
};

export default Login;
