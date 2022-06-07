import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

const RestoreProductDefault = (props) => {
    const CancelEvent = () => {
        props.Cancel()
    }
    return (
        <>
            <div className="restore-product-default-header">
                <CloseIcon className='delete-close-btn' onClick={CancelEvent} />
                <br />
                <h5>Restore Template to Product Default?</h5>
            </div>
            <hr />
            <div className="restore-product-default-body">
                <p>Restoring this template to product default will remove any customizations
                    your organization has applied to this template.</p>
                <p>Are you sure you would like to restore this template to product default?</p>
            </div>
            <br />
            <br />
            <hr />
            <div className="restore-product-default-footer">
                <Button onClick={CancelEvent} variant="contained" size="small" className=''>No</Button>
                <Button variant="contained" size="small" className=''>Yes</Button>


            </div>
        </>
    )
}

export default RestoreProductDefault