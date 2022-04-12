import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from '../Topbar/Topbar'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import HomePage from './HomePage'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
    return (
        <>
            <div className="homeDashboard">
                <Topbar />
    
                    <Sidebar >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route index element={<HomePage />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            

                        </Routes>
                    </Sidebar>
                   
            </div>

        </>
    )
}

export default Home

// https://phishcode.netlify.app/home