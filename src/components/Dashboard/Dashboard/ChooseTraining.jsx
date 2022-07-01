import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Videolist } from '../Learning Hub/LearningHubData';
import { Link } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';

const ChooseTraining = () => {
  const [q, setQ] = useState("")
  const [activeClass, setActiveClass] = useState()
  const [videoList, setVideoList] = useState(Videolist)
  // const [users, setUsers] = useState()

  const Search = (users) => {
    return users.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }
  const handleChooseTraining = (id) =>{
    if(activeClass == ''){
      setActiveClass(id)
    }else{
      setActiveClass('')
    }
  }
  return (
    <>

      {/* <div className="breadcrumb">
        <span className='breadcrumb-items'>Choose Training </span>

      </div> */}
      <div className="users-container learging-hub-section">
        <div className="learning-hub-title">
          <h5>Choose Training</h5>
          <p>Select an awareness training video, which is a great way to increase security awareness 
            among your users and helps you to reduce the potential security risk to your organization.</p>
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
            videoList.filter((val) => {
              if (q == '') {

                return val
              }
              else if (val.details.toLowerCase().includes(q.toLocaleLowerCase())) {
                return val
              }
            }).map((currEl) => {
              return (
                <React.Fragment key={currEl.id}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 g-2 "  >

                    <div className="card text-center choose-training-card">
                      <div className="card-header ">
                        <div className='card-header-container'>
                          <div className='title'>{currEl.name}</div>
                          <div className='title'>{currEl.time}</div>
                        </div>

                      </div>
                      {/* <div className='email-featred'></div>
                      <span className="rotate"><div>{currEl.featured}</div></span> */}

                      <div className="card-body ">
                        <a href={currEl.videoUrl} target='_blank'>
                          <div className="learning-video">

                            <img src={currEl.url} className="choose-training-video-thumbnail" alt={currEl.name} />

                          </div>
                          {/* <div className="learning-video-details">{currEl.details}</div> */}
                        </a>
                      </div>
                      <div  className={activeClass == currEl.id ? "select-choose-attack" : "card-footer"} onClick={e => handleChooseTraining(currEl.id)}>
                        <span className=' btn title'  > {activeClass != currEl.id ? 'Choose This Training' : <div className='choose-attack-block'><DoneIcon fontSize='small' /><div >Training Choosen</div></div>}</span>

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

export default ChooseTraining
