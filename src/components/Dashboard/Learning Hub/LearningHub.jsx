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
  // const [users, setUsers] = useState()

  const Search = (users) => {
    return users.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }
  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>PhishCode Training Hub</span>

      </div>
      <div className="users-container learging-hub-section">
        <div className="learning-hub-title">
          {/* <h2>PhishCode Training Hub </h2> */}
          <p>PhishCode integrate testing and training in a simple, and easy way.
            PhishCode provides elite cyber cyber security awaeness for your end-users.</p>
        </div>
        <div className="users-header-contents">
          <div className="users-search">
            <SearchIcon className='users-search-icon' />
            <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder='Search Here.'
                className='users-input-search' />

          </div>

        </div>
        <hr />
        <div className="row learning-video-row">
          {
            videoList.filter((val)=>{
              if(q == ''){
                
                return val 
              }
              else if(val.details.toLowerCase().includes(q.toLocaleLowerCase())){
                return val
              }
            }).map((currEl) => {
              return (
                <React.Fragment key={currEl.id}>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 g-2 "  >

                    <div className="card text-center email-card">
                      {/* <div className='email-featred'></div>
                      <span className="rotate">{currEl.type}</span> */}

                      <div className="card-body ">
                        <a href={currEl.videoUrl} target='_blank'>
                          <div className="learning-video">

                            <img src={currEl.url} className="video-thumbnail" alt={currEl.name} />

                          </div>
                          <div className="learning-video-details">{currEl.details}</div>
                        </a>
                      </div>

                    </div>

                  </div>
                </React.Fragment>
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default LearningHub