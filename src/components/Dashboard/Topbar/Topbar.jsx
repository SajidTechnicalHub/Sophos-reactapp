
import React, { useState, useEffect } from "react";
import './Topbar.css'
import img from './user1.png'
const Topbar = () => {

  const [currentDateTime, setCurrentDateTime] = useState(() => new Date().toLocaleString());
  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, [setCurrentDateTime]);

  return (
    <>
      <div className='topbar'>
        <div className='topbarWrapper'>
          <span className="topbar-title">
            {/* <span className='topbar-logo'>Ph</span> */}
            <h3>PhishCode</h3>
            <div className="topbar-vertical-line"></div>
            <span className="topbar-project-title">Project</span>
            
          </span>
        </div>
        <div className='topbar-notify'>
          <span className='time'>{currentDateTime}</span>
          <img src={img} className='topbar-notify-img' alt="user" />
        </div>
      </div>
    </>

  )
}

export default Topbar