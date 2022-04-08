import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: ''
    });
    const InputEvent = (e) =>{
        const {name, value} = e.target;
        setInput(()=>{
            return{ ...input, [name]:value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        alert( `Your Email: ${input.email} and Password is: ${input.password} `)
        setInput({
            username:'',
            email: '',
            password: ''
        })
    }
    return (
        <>
            <div>
                <form onSubmit={SubmitEvent} >
                    <div className="mb-3">
                        <label htmlFor="InputUsername" className="form-label">Username</label>
                        <input type="text"
                         name="username" 
                         value={input.username} 
                         onChange={InputEvent}  
                         className="form-control" 
                         />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email address</label>
                        <input type="email"
                         name="email" 
                         value={input.email} 
                         onChange={InputEvent}  
                         className="form-control"
                         />
                           
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">Password</label>
                        <input type="password"
                         name="password" 
                         value={input.password} 
                         onChange={InputEvent}  
                         className="form-control"
                         />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check1"/>
                            <label className="form-check-label" htmlFor="Check1">Check me out</label>
                    </div>
                    <div className='submit-btn'>
                      <button type="submit" className="form-btn">login</button>
                      <Link to="signup">
                        <button className="form-btn">Sign Up</button>
                    </Link>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default LoginForm