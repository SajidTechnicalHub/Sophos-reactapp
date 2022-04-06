import React from 'react'

const LoginForm = () => {
    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <label for="InputUsername" className="form-label">Username</label>
                        <input type="email" className="form-control" id="InputUsername" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="InputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="InputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="InputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="Check1"/>
                            <label className="form-check-label" for="Check1">Check me out</label>
                    </div>
                    <div className='submit-btn'>
                      <button type="submit" className="btn btn-primary">login</button>
                      <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default LoginForm