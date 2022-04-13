import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark header-bg-color">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <span className='header-title'>
              <span className='header-logo'>Ph</span><h3>PhishCode</h3>
            </span>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
                {/* <a  className="nav-link " aria-current="page" href="/">Features</a> */}
                <Link to='/' className=" nav-link">Documentation</Link>
                
              </li>
              <li className="nav-item">
                
                <Link to='admin' className=" nav-link">Dashboard</Link>
              </li>
              
              <li className="nav-item">
                {/* <a  className="nav-link " aria-current="page" href="/">Features</a> */}
                <Link to='/' className=" nav-link">Features</Link>
                
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link active" href="/">Free Trail</a> */}
                <NavLink activeclassname='' className=" nav-link" to='/'>Free Trail</NavLink>
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link " href="/">How to Buy</a> */}
                <Link to='/' className=" nav-link">How to Buy</Link>
              </li>
              <li className="nav-item ">
                {/* <a className="nav-link " href="/">Get Pricing</a> */}
                <Link to='/' className=" nav-link">Get Pricing</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header