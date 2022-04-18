import { useState } from "react"
import { Link } from 'react-router-dom';
import React from 'react'

const ForgotPasswordEmail = () => {
    const [input, setInput] = useState({

        email: '',

    });
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...input, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        alert(`Your Email: ${input.email}`)
        setInput({

            email: '',

        })
    }
    return (
        <><div className="forgot-password-block">
            <div className="forgot-passowrd-header">
                <h3>PhishCode</h3>
            </div>
            <div className="forgot-password-content">
                <form   >

                    <div className="mb-4">
                        <label htmlFor="InputEmail1" className="form-label mb-4 ">Enter Your Email </label>

                        <input type="email"
                            name="email"
                            value={input.email}
                            onChange={InputEvent}
                            className="form-control"
                            required="required"
                            placeholder='Email address'
                        />

                    </div>
                    <br />
                    <div className='password-btn-block'>

                        <button type="submit" className="forgot-form-btn mb-3"><Link to="/Sophos-reactapp/Forgot_Password/code">Send Varification Code</Link></button>

                        <br />


                    </div>
                    <Link to="/Sophos-reactapp/login" className="back">
                        <span className=''> Back to Login</span>
                    </Link>
                </form>
            </div>
        </div>

        </>
    )
}

export default ForgotPasswordEmail