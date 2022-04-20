import React from 'react'
import { Outlet } from "react-router-dom";
import './ForgotPassword.css'
import Header from '../Home/Header'



const ForgotPasswordLayout = () => {
    return (
        <>
            <Header />
            <div className='forgot-passowrd-section'>

                <Outlet />
            </div>


        </>
    )
}

export default ForgotPasswordLayout