import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import ForgotPasswordFooter from './ForgotPasswordFooter';

const ForgotPasswordCode = () => {
    const [input, setInput] = useState({

        code: '',

    });
    let navigate = useNavigate()
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Yourcode: ${input.email}`)
        setInput({

            code: '',

        })
        navigate('/Sophos-reactapp/Forgot_Password/new_password')
    }
    return (
        <>
            <div className="forgot-password-block">
                <div className="forgot-passowrd-header">
                    <h3>PhishCode</h3>
                </div>
                <div className="forgot-password-content">
                    <form onSubmit={SubmitEvent}  >

                        <div className="mb-4">
                            <label htmlFor="InputEmail1" className="form-label forgot-label">Enter Your Code<span className='estaric'>*</span> </label>

                            <input type="text"
                                name="code"
                                value={input.code}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='Please enter your code here'
                            />

                        </div>
                      
                        <div className='password-btn-block'>

                            <button type="submit" className="forgot-form-btn mb-3">Verify Your Code</button>

                        </div>
                        <br />
                        <div className='verify-code'>
                            <Link to="/Sophos-reactapp/Forgot_Password" className="back">
                                <span > Back </span>
                            </Link>
                            <Link to="" className="back">
                                <span > Not received code yet? Resend Email</span>
                            </Link>
                        </div>

                    </form>
                    <br />  
                </div>
                
                <ForgotPasswordFooter/>
            </div>
        </>
    )
}

export default ForgotPasswordCode