import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './LearningHub.css'
import TextField from '@mui/material/TextField';
import { Videolist } from './LearningHubData';
import { Link } from 'react-router-dom';


const LearningHub = () => {
  const [q, setQ] = useState("")
  const [videoList, setVideoList] = useState(Videolist)
  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Learging Hub</span>

      </div>
      <div className="users-container learging-hub-section">
        <div className="learning-hub-title">
          <h2>PhishCode Training Hub </h2>
          <p>PhishCode integrate testing and training in a simple, and easy way.
            PhishCode provides elite cyber cyber security awaeness for your end-users.</p>
        </div>
        <div className="users-header-contents">
          <div className="users-search">
            <SearchIcon className='users-search-icon' />

            <TextField id="standard-basic" label="Search" variant="standard"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

          </div>

        </div>
        <hr />
        <div className="row learning-video-row">
          {
            videoList.map((currEl) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 g-2 " key={currEl.id} >
                    <div className="learning-video-container">
                      <Link to=''>
                        <div className="learning-video">
                          <img src={currEl.url} className="video-thumbnail" alt={currEl.name} />
                        </div>
                      </Link>
                      <div className="learning-video-details">{currEl.details}</div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default LearningHub