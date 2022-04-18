import React from 'react'
import { Outlet } from "react-router-dom";
import './ForgotPassword.css'


const ForgotPasswordLayout = () => {
    return (
        <>
            {/* <div>ForgotPasswordLayout</div>
            <ForgotPassword /> */}
            <div className='forgot-passowrd-section'>
                <Outlet/>
            </div>

        </>
    )
}

export default ForgotPasswordLayout