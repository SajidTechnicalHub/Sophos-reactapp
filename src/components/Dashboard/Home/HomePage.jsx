import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Home.css'
import Logo from './home.svg'
import Intro from './Intro'
import Explanation from './Explanation'
const HomePage = () => {

  const [isClick, SetIsClick] = useState(true)
  const OnclickEvent = () =>{
    if (isClick === true){
      SetIsClick(false)
    }else{
      SetIsClick(true)
    }
  }
  return (
    <>
    
    <div className="container-flude">
      <div className="row">
        <div className="col-lg-6 ">
          <img src={Logo} className='home-img' alt="logo image" />
        </div>
        <div className="col-lg-6 mt-3">
          <h1>Welcome to Phish Code</h1>
          <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra 
            air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
             bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

            <div className='hpmepage-child-navbar'>
              <button className='btn' onClick={OnclickEvent} >Intro</button>
              <button className='btn' onClick={OnclickEvent} >Explanation</button>

            </div>
            <div>
              {isClick ? <Intro/> : <Explanation />}
            </div>
        </div>
        <hr className='home-line'/>
      </div>
    </div>
    </>
  )
}

export default HomePage


// https://sajidtechnicalhub.github.io/