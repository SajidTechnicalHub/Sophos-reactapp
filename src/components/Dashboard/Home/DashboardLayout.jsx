import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import './DashboardLayout.css'
import Sidebar from '../Sidebar/Sidebar'


const DashboardLayout = () => {
    return (
        <>
            <div className="homeDashboard">
                <Topbar />
                <Sidebar />

            </div>

        </>
    )
}

export default DashboardLayout

// https://phishcode.netlify.app/home