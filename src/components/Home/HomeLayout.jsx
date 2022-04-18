import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './Home';
import Header from './Header'
import './HomeLayout.css'
const HomeLayout = () => {
  return (
    <>
      <div className='Home-layout-bg'>
        <Header />
        <Home />
      </div>


    </>
  )
}

export default HomeLayout