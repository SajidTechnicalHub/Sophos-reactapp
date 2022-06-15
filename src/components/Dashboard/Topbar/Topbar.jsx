
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Topbar.css'
import img from './user1.png'
const Topbar = () => {

  const [currentDateTime, setCurrentDateTime] = useState(() => new Date().getUTCHours()+':'+new Date().getUTCMinutes()+':'+ new Date().getUTCSeconds()+ ' '+ '(UTC)');
  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCurrentDateTime(new Date().getUTCHours()+':'+new Date().getUTCMinutes()+':'+ new Date().getUTCSeconds()+ ' '+ '(UTC)');
    }, 1000);
    return () => clearInterval(secondsTimer);
    
  }, [setCurrentDateTime]);

  // const [currentDateTime, setCurrentDateTime] = useState(() => new Date().toUTCString());
  // useEffect(() => {
  //   const secondsTimer = setInterval(() => {
  //     setCurrentDateTime(new Date().toUTCString());
  //   }, 1000);
  //   return () => clearInterval(secondsTimer);
    
  // }, [setCurrentDateTime]);

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
        <span className='time'>{currentDateTime}</span>
        <div className='topbar-notify'>
          
          <img src={img} className='topbar-notify-img' alt="user" />
          <div className="dropdown">
              <button className="  btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                User Name
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <Link to='settings'><li className="dropdown-item">Profile</li></Link>
              <Link to=''><li className="dropdown-item">Health and Care</li></Link>
                <Link to=''><li className="dropdown-item">Logout</li></Link>
              </ul>
            </div>
        </div>
      </div>
    </>

  )
}

export default Topbar