import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '.././Footer/logo.png'
import { Link } from 'react-router-dom';
const Footer = () =>{
  return (
    <React.Fragment>
        <footer className='phishCode-footer'>
            <div className="footer-logo">
                <img src={logo} className='footer-logo' alt="logo" />
            </div>
            <div className="phishCode-copyright-block">
               <span className='phishCode-copyright-block-text'> All Rights Reserved 2022 - @ PhishCode</span>
                <span className='phishCode-copyright-block-text'>Terms of Use</span>
            </div>
            <div className='phishCode-footer-contact-block'>
                <span className='phishCode-footer-contact-text'>Contact Us</span>
                <span className='phishCode-footer-social-icon-block'>
                   <Link to=''> <span className='phishCode-footer-social-icon'><FacebookIcon/></span></Link>
                   <Link to=''> <span className='phishCode-footer-social-icon'><TwitterIcon/></span></Link>
                   <Link to=''> <span className='phishCode-footer-social-icon'><FacebookIcon/></span></Link>
                </span>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer