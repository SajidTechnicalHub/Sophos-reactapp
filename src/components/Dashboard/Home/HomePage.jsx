import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from './home.svg'
import Intro from './Intro'
import Feedback from './Feedback'
const HomePage = () => {
  const activeClass = {
    color: "#0c4160",
    borderBottom: "2px solid #0c4160",


  }
  const notActiveClass = {
    color: "#0c4160",

  }

  const [isClick, SetIsClick] = useState(true)
  const [feedBack, setFeedBack] = useState(false)
  const [intro, setIntro] = useState(true)
  const OnclickEvent = () => {
    if (isClick === true) {

      SetIsClick(false)
    } else {

      SetIsClick(true)
    }

    // if (intro === true){
    //   setIntro(true)
    //   setFeedBack(false)
    // }
    if (feedBack === false) {
      setFeedBack(true)
      setIntro(false)
    } else {
      setFeedBack(false)
      setIntro(true)
    }
  }

  return (
    <>

      <div className="container-flude">
        <div className="breadcrumb">
          <span className='breadcrumb-items'>Home</span>

        </div>
        <div className="row">

          <div className="col-lg-6 ">
            <img src={Logo} className='home-img' alt="logo image" />
          </div>
          <div className="col-lg-6 mt-3 ">
            <h2>Welcome to Phish Code</h2>
            <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
              bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

            <div className='hpmepage-child-navbar mb-2'>

              <span style={intro ? activeClass : notActiveClass} className=' intro-class' onClick={OnclickEvent}  >Intro</span>
              <span style={feedBack ? activeClass : notActiveClass} className='intro-class' onClick={OnclickEvent} >Give Feedback</span>

            </div>
            <div>
              {isClick ? <Intro /> : <Feedback />}
            </div>
          </div>
          <hr className='home-line' />
        </div>
      </div>
    </>
  )
}

export default HomePage


// https://sajidtechnicalhub.github.io/