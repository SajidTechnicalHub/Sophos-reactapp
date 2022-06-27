import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [input, setInput] = useState({
        // username: '',
        email: '',
        password: ''
    });
    let navigate = useNavigate()
    const InputEvent = (e) =>{
        const {name, value} = e.target;
        setInput(()=>{
            return{ ...input, [name]:value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert( `Your Email: ${input.email} and Password is: ${input.password} `)
        setInput({
            // username:'',
            email: '',
            password: ''
        })
        navigate('/Sophos-reactapp/free_trail/login_code')
    }
    return (
        <>
            <div >
                <form onSubmit={SubmitEvent} >
                    <div className="mb-4">
                        <label htmlFor="InputEmail1" className="form-label">Email<span className='estaric'>*</span></label>
                        <input type="email"
                         name="email" 
                         value={input.email} 
                         onChange={InputEvent}  
                         className="form-control"
                         required="required" 
                         placeholder='Username or Email'
                         />
                           
                    </div>
                    <div className="mb-4">
                        <label htmlFor="InputPassword1" className="form-label">Password<span className='estaric'>*</span></label>
                        <input type="password"
                         name="password" 
                         value={input.password} 
                         onChange={InputEvent}  
                         className="form-control"
                         required="required" 
                         placeholder='Password'
                         />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check1"/>
                            <label className="form-check-label" htmlFor="Check1">Check me out</label>
                    </div> */}
                    
                    <div className='submit-login-btn'>
                      
                    <button type="submit" className="login-form-btn mb-3">Sign In</button>
                    
                    <Link to="/Sophos-reactapp/Forgot_Password">
                        <span className=''> Forgotten password?</span>
                    </Link>
                    <hr className='login-form-line' />
                    <Link to="signup">
                        <button className=" login-form-btn">Create New Account</button>
                    </Link>
                      
                    </div>
                   
                </form>
            </div>
        </>
    )
}

export default LoginForm