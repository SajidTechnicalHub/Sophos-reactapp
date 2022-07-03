import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '.././Footer/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <React.Fragment>
            <footer className='phishCode-footer'>
                
                <div className="phishCode-copyright-block">
                    <span className='phishCode-copyright-block-text'> All Rights Reserved 2022 - @ PhishCode LLC</span>
                    <span className='phishCode-copyright-block-text'>Terms of Use</span>
                </div>
                <div className='phishCode-footer-contact-block'>
                    <span className='phishCode-footer-contact-text'>Contact Us</span>
                    <span className='phishCode-footer-social-icon-block'>
                        <Link to=''> <span className='phishCode-footer-social-icon'><FacebookIcon /></span></Link>
                        <Link to=''> <span className='phishCode-footer-social-icon'><TwitterIcon /></span></Link>
                        <Link to=''> <span className='phishCode-footer-social-icon'><YouTubeIcon /></span></Link>
                        <Link to=''> <span className='phishCode-footer-social-icon'><LinkedInIcon /></span></Link>
                
                        
                    </span>
                </div>
                <div className="footer-logo-block">
                    <img src={logo} className='footer-logo' alt="logo" />
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer


   