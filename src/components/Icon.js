import React from 'react'

const Icon = () => {
    return (
        <div className='check-icon'>
            <span className='check-icon-style'>
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </span>
            <p>Automated reporting on phishing and training results</p>
        </div>
    )
}

export default Icon