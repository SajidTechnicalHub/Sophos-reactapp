import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import SignUpForm from './SignUpForm'

const SignupHome = () => {
    return (
        <>
            <div className='container-fluid main-section'>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <div className='main-section-title-block'>
                            <h1 className='main-title'>Phish Threat Free Trial</h1>
                            <h3>Reduce your largest attack surface</h3>
                            <div className='main-section-title-block-contents'>
                                <span className='check-icon'>
                                    <span className='check-icon-style'>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </span>

                                    <p>Hundreds of realistic and challenging simulations</p>
                                </span>
                                <span className='check-icon'>
                                    <span className='check-icon-style'>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </span>
                                    <p>Automated reporting on phishing and training results</p>
                                </span>

                                <span className='check-icon'>
                                    <span className='check-icon-style'>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </span>
                                    <p>Nine language options</p>
                                </span>
                                <span className='check-icon'>
                                    <span className='check-icon-style'>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </span>
                                    <p>Choice of international regions (United States, Ireland, Germany)</p>
                                </span>

                                <span className='check-icon'>
                                    <span className='check-icon-style'>
                                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                    </span>
                                    <p>SOC 2 compliant to safeguard customer data</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* **********************************
                Form Section start
            ********************************** */}
                    <div className='col-lg-6 '>
                        <div className='main-section-form-block'>

                            
                            <SignUpForm />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupHome