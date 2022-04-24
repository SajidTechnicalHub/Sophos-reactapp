import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import ForgotPasswordFooter from "./ForgotPasswordFooter";

const ForgotPasswordEmail = () => {
    const [input, setInput] = useState({

        email: '',

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
        // alert(`Your Email: ${input.email}`)
        setInput({

            email: '',

        })
        navigate('/Sophos-reactapp/Forgot_Password/code')
    }
    return (
        <><div className="forgot-password-block">
            <div className="forgot-passowrd-header">
                <h3>PhishCode</h3>
            </div>
            <div className="forgot-password-content">
                <form  onSubmit={SubmitEvent} >

                    <div className="mb-4">
                        <label htmlFor="InputEmail1" className="form-label forgot-label ">Email<span className="estaric">*</span> </label>

                        <input type="email"
                            name="email"
                            value={input.email}
                            onChange={InputEvent}
                            className="form-control"
                            required="required"
                            placeholder='Email address'
                        />

                    </div>
                    <div className='password-btn-block'>

                        <button type="submit" className="forgot-form-btn mb-3">Send Varification Code</button>

                       
                    </div>
                    <Link to="/Sophos-reactapp" className="back">
                        <span className=''> Back to Login</span>
                    </Link>
                </form>
                <br />
            </div>
            <ForgotPasswordFooter/>
        </div>

        </>
    )
}

export default ForgotPasswordEmail