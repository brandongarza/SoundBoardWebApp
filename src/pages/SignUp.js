import React,{useState} from 'react';


const SignUp=(props)=>{
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword1, setEnteredPassword1] = useState('');
    const [enteredPassword2, setEnteredPassword2] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');

      const submitHandler=(event)=>{
        event.preventDefault();
        
        const newUSerData = {
          username: enteredUsername,
          password1: enteredPassword1,
          password2: enteredPassword2, 
          email: enteredEmail
        };
    
        props.onSaveExpenseData(expenseData);
        setEnteredPassword('');
        setEnteredPassword2('');
        setEnteredEmail('');
        setEnteredUsername('');
        
      }








    return(
        <div>
                <form onSubmit = {submitHandler}>
                    <div className='sign-up'> 
                        <label> Email:  </label>
                        <input type= "text" name = "password" required />
                    </div>
                    
                    <div className='sign-up'> 
                        <label> USERNAME: </label>
                        <input type= "text" name = "u-name" required />
                    </div>

                    <div className='sign-up'> 
                        <label> PASSWORD: </label>
                        <input type= "text" name = "password1" required />
                    </div>

                    <div className='sign-up'> 
                        <label> Re-Enter PASSWORD: </label>
                        <input type= "text" name = "password2" required />
                    </div>

                    <div className = "submit-button">
                        <button type="submit" onvalue="submit">Submit</button>
                    </div>

                    <div className = "cancel-button">
                        <button type="button" value="cancel">Cancel</button>
                    </div>
                </form>    
        </div>
    );
};

export default SignUp;