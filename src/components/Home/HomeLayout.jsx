import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './Home';
import Header from './Header'
import './HomeLayout.css'
import Footer from '../Dashboard/Footer/Footer';
const HomeLayout = () => {
  return (
    <>
      <div className='Home-layout-bg'>
        <Header />
        <Home />
        <Footer />
      </div>


    </>
  )
}

export default HomeLayout