import React from 'react'
import { Link } from 'react-router-dom'


const ForgotPasswordFooter = () => {
  return (
    <>
    <div className="forgot-password-footer-section">
        <div className="forgot-password-foooter-links-bock">
        <Link to="" className='forgot-password-footer-links'>
            Legal
        </Link>
        <Link to="" className='forgot-password-footer-links'>
            Privacy
        </Link>
        <Link to="" className='forgot-password-footer-links'>
            Cookies
        </Link>
        <Link to="" className='forgot-password-footer-links'>
            Learn More
        </Link>
        </div>
        <div className="forgot-password-copyright">
            <span className='forgot-label '>@ 2022 PhishCode Ltd. All rights reserved.</span>
        </div>
    </div>
    </>
  )
}

export default ForgotPasswordFooter