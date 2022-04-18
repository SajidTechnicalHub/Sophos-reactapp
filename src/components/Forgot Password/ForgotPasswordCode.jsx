import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';

const ForgotPasswordCode = () => {
    const [input, setInput] = useState({

        code: '',

    });
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        alert(`Yourcode: ${input.email}`)
        setInput({

            code: '',

        })
    }
    return (
        <>
            <div className="forgot-password-block">
                <div className="forgot-passowrd-header">
                    <h3>PhishCode</h3>
                </div>
                <div className="forgot-password-content">
                    <form   >

                        <div className="mb-4">
                            <label htmlFor="InputEmail1" className="form-label mb-4 ">Enter Your Code </label>

                            <input type="text"
                                name="code"
                                value={input.code}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='Please enter your code here'
                            />

                        </div>
                        <br />
                        <div className='password-btn-block'>

                            <button type="submit" className="forgot-form-btn mb-3"><Link to="/Sophos-reactapp/Forgot_Password/new_password" >Verify Your Code</Link></button>

                            <br />


                        </div>
                        <div className='verify-code'>
                            <Link to="/Sophos-reactapp/Forgot_Password/email" className="back">
                                <span className=''> Back</span>
                            </Link>
                            <Link to="" className="back">
                                <span className=''> Not received code yet? Resend Email</span>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordCode