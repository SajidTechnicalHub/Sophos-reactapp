import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const LicenseContents = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'PhishCode is free for 6 months'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'No need for credit card'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'Free product updates for 6 months'
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'Free 24/7 Support'
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'Free awareness for you users'
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
        details: 'Celebrate'
    },
]

const License = () => {
    return (
        <>
            <div className="license-container">
                <div className="license-content-block">
                    <span>Congratulations!</span>
                    <br /><br />
                    {LicenseContents.map((value) => {
                        return (
                            <>
                                <span className='license-check-icon' key={value.id}>
                                    <span className='license-check-icon-style'>
                                        {value.icon}
                                    </span>
                                    <p>{value.details}</p>
                                </span>
                            </>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default License