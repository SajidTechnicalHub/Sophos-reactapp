import { useState } from 'react'
import ForgotPasswordFooter from './ForgotPasswordFooter';
import { useNavigate } from 'react-router-dom';

const NewPassword = () => {
    const [input, setInput] = useState({
        password: '',
        new_password: ''

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
        // alert(`Your Password: ${input.password}`)
        setInput({

            password: '',
            new_password: ''

        })
        navigate('/Sophos-reactapp/projects')
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
                            <label htmlFor="Password" className="form-label forgot-label ">Enter Your New Password<span className='estaric'>*</span> </label>

                            <input type="password"
                                name="password"
                                value={input.password}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='Enter your new password'
                            />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="new_Password" className="form-label forgot-label ">Re-Type Your New Password<span className='estaric'>*</span> </label>

                            <input type="password"
                                name="new_password"
                                value={input.new_password}
                                onChange={InputEvent}
                                className="form-control"
                                required="required"
                                placeholder='Re-Type your password'
                            />

                        </div>
                        
                        <div className='password-btn-block'>
                            <button type="submit" className="forgot-form-btn ">Save New Password</button>
                            
                        </div>
                    </form>
                    <br />
                </div>
                <ForgotPasswordFooter/>
            </div>
        </>
    )
}

export default NewPassword