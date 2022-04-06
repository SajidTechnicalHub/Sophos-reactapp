import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark header-bg-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className='header-title'>
              <span className='header-logo'>Ph</span><h3>Phish Threat</h3>
            </span>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Features</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#">Free Trail</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">How to Buy</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">Get Pricing</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header