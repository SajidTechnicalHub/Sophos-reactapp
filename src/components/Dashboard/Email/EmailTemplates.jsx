import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useWindowDimensions from '../../useWindowDimensions'
import './EmailTemplates.css'
import img from '../Learning Hub/Images/video1.png'
import Templates from './EmailTemplates/Templates';
import TemplatesModel from './EmailTemplates/TemplatesModel';


const EmailTemplateData = [
  {
    id: 1,
    template: <Templates />,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Managing COVID-19 Stress',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Hard',
    featured: 'Featured',
    days: '2 Days ago'

  },
  {
    id: 2,
    template: <Templates />,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'LinkedIn Closed Account',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Moderate',
    featured: 'Featured',
    days: '3 Days ago'

  },
  {
    id: 3,
    template: <Templates />,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'New Parking Rules',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Simple',
    featured: 'New',
    days: '2 Days ago'

  },
  {
    id: 4,
    template: <Templates />,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Your Voice Engagement Survey Pulse',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Moderate',
    featured: 'Simple',
    days: '5 Days ago'

  },
  {
    id: 5,
    template: <Templates />,
    name: 'EmailTemplates',
    ImgUrl: img,
    title: 'Back to Work Post COVID-19',
    description: 'With supporting text below as a natural.',
    btn: 'Click to see more',
    type: 'Hard',
    featured: 'Featured',
    days: '2 Days ago'

  },

]
const EmailTemplates = () => {
  const [q, setQ] = useState("")
  // const { height, width } = useWindowDimensions();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "55%",
    height: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    boxShadow: 24,
    display: 'block'
    // p: 4,
  };
  const mobilestyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "95%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    overflow: 'scroll',
    // boxShadow: 24,
    display: 'block'
    // p: 4,
  }

  const { height, width } = useWindowDimensions();
  // Handle Create Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="breadcrumb ">
        <span className='breadcrumb-items'>Email Templates</span>

      </div>

      <div className="users-container px-3">
        <div className="users-header">
          <div className="users-header-contents">
            {/* <h5>All Users</h5> */}
            <div className="users-search">
              <SearchIcon className='users-search-icon' />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder='Search Here.'
                className='users-input-search' />

              <select
                name=""
                id=""
                className='user-manu'
              >
                <option>All Attacks</option>
                <option>Credential Harvest</option>
                <option>Drive-By URL</option>
                <option>Malware Attack</option>
                <option>Link to Malware</option>
                <option>OAuth Consent Grant</option>
              </select>

            </div>
            {/* <Button variant="contained"  size="small" className='add-users-btn'>Add Group</Button> */}

          </div>
          <hr />
        </div>

        <div className="row">
          {
            EmailTemplateData.filter((val) => {
              if (q == '') {

                return val
              }
              else if (val.title.toLowerCase().includes(q.toLocaleLowerCase())) {
                return val
              }
            }).map((currentElem) => {
              return (
                <>
                  <div className="col-lg-4 g-3">
                    <div className="card ">
                      <div className="card-header ">
                        <div className='card-header-container'>
                          <div className='title'>{currentElem.title}</div>
                          <div className='title'>{currentElem.type}</div>
                        </div>

                      </div>

                      <div className="card text-center ">

                        <div className='email-featred'></div>
                        <span className="rotate"><div>{currentElem.featured}</div></span>

                        <div className="card-body email-card">
                          {currentElem.template}

                          {/* <h6 className="card-title">{currentElem.title}</h6>
                          <p className="card-text">{currentElem.description}</p> */}
                          {/* <a href="#" className="btn btn-primary">{currentElem.btn}</a> */}
                        </div>
                        <div className="card-footer">
                          <span className=' btn title' onClick={handleOpen} > View this Attack Payload</span>
                        </div>
                      </div>
                      <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={width <= 992 ? mobilestyle : style}>
                      <div className="create-project-moldel-container">
                        <div className="project-model-header">
                          <h3>Template Name</h3>
                        </div>
                        <hr />
                        <div className='create-project-model-form-container'>
                          <Templates
                            Cancel={handleClose}
                          />
                        </div>

                      </div>
                    </Box>
                  </Modal>
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

export default EmailTemplates
