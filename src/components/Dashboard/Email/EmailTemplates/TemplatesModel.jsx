
import React, { useState } from 'react'
import Templates from './Templates';
import Button from '@mui/material/Button';

const TemplatesModel = (props) => {
    const CancelEvent = () => {
        props.Cancel()
    }
    return (
        <>
        <div className="email-template-model"></div>
           < Templates />
           <Button variant="contained" onClick={CancelEvent} size="small" className='project-create-btn'>Cancel</Button>

        </>
    )
}

export default TemplatesModel