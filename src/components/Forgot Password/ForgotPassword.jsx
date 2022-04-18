import { useState } from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
        <>

            <div className="forgot-password-block">
                <div className="forgot-passowrd-header">
                    <h3>PhishCode</h3>
                </div>
                <div className="forgot-password-content">
                    <form onSubmit={SubmitEvent} >

                        <div className="mb-4">
                            <label htmlFor="InputEmail1" className="form-label forgot-form-label ">Sign In With You PishCode ID </label>
                            <br />
                            <br />
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

                            <button type="submit" className="forgot-form-btn mb-3"><Link to="/Sophos-reactapp/Forgot_Password/email">Login</Link></button>

                            <br />
                            <Link to="/Sophos-reactapp/signup">
                                <span className='forgot-password'> Create PhishCode ID</span>
                            </Link>

                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgotPassword
