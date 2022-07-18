import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useWindowDimensions from '../../useWindowDimensions'

import img from '../Learning Hub/Images/video1.png'
import Templates from '../Email/EmailTemplates/Templates';
import DoneIcon from '@material-ui/icons/Done';
import { EmailTemplateData } from '../Email/EmailTemplates/EmailTemplateData';


  
const ChooseAttack = (props) => {
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
  const [templateModel, setTemplateModel] = useState('')
  // Handle Create Model
  const [open, setOpen] = useState(false);
  const handleOpen = (template) =>{
     setOpen(true);
     setTemplateModel(template)
  }
  const handleClose = () => setOpen(false);
     
  

  // const [activeClass, setActiveClass] = useState()

  return (
    <React.Fragment>


      <div className="users-container p-3 choose-attack-container">
        <div className="compaign-attack-header">
          <div className='choose-attack-title'>
            <label htmlFor="name" className="form-label">Choose Attack Payload</label>
            <p className='language-text'>Select an attack payload for a simulation technique. 
            Make edits to the payload content of this campaign to tailor it for your users.</p>
          </div>
          <div className="users-search">

            <SearchIcon className='users-search-icon' />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder='Search Here.'
              className='users-input-search' />

            
          </div>
          <div className="choose-attack-select">
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
          
        </div>
        
        <hr />
        {/* <div className="users-header">
          
          <hr />
        </div> */}

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
                <React.Fragment key={currentElem.id}>
                  <div className="col-lg-4 g-3">
                    <div className="card ">
                      <div className="card-header ">
                        <div className='card-header-container'>
                          <div className='title'>{currentElem.title}</div>
                          {/* <div className='title'>{currentElem.type}</div> */}
                        </div>

                      </div>

                      <div className="card text-center ">

                        {/* <div className='email-featred'></div>
                        <span className="rotate"><div>{currentElem.featured}</div></span> */}

                        <div className="card-body email-card " style={{ cursor: 'pointer' }} onClick={()=>handleOpen(currentElem.template)}>
                          {/* {currentElem.template} */}
                          <Templates
                          template={currentElem.template}
                          
                          />

                        </div>
                        <div className={props.activeClass1 == currentElem.id ? "select-choose-attack" : "card-footer"} onClick={e => props.handleChooseAttack(currentElem.id, currentElem.template)}>
                          <span className=' btn title'  >
                             {props.activeClass1 != currentElem.id ? 
                             <div >{currentElem.attack}</div> : 
                            <div className='choose-attack-block'><DoneIcon fontSize='small' /><div >Attack Choosen</div></div>}
                          </span>

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
                                template={templateModel}
                              />
                            </div>

                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>


                </React.Fragment>
              )
            })
          }


        </div>
      </div>

    </React.Fragment>
  )
}

export default ChooseAttack
