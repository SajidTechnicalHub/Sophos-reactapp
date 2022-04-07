import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Features from './Pages/Features';
import LoginForm from './Form/LoginForm';
import SignUpForm from './Form/SignUpForm';
import SignupHome from './Form/SignupHome';
import LoginHome from './Form/LoginHome';

const Navigation = () => {
  return (
    <>
    <Header/>
    
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="login" element={<LoginHome/>} />
          <Route path="signup" element={<SignupHome/>} />
          {/* <Route path="features" element={<LoginForm/>} /> */}
        
      </Routes>
    
    </>
  )
}

export default Navigation