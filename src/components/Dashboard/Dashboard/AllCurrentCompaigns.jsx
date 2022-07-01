import React, { useState } from 'react'
import './Dashboard.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StartIcon from '@mui/icons-material/Start';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CurrentCompaignList } from './DashboardData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import useWindowDimensions from '../../useWindowDimensions';
import LearningHub from '../Learning Hub/LearningHub';
import Button from '@mui/material/Button'
import ChooseTraining from './ChooseTraining';

// **********circle progress function start*****************

function CircularProgressWithLabel(props) {
    
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid grey',
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%'
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
};


// ***************Model Style*************
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    height: "90%",
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
    boxShadow: 24,
    display: 'block'
    // p: 4,
  }

const AllCurrentCompaigns = () => {

    const { height, width } = useWindowDimensions();
    const [count, setCount] = useState(CurrentCompaignList.length)
    const [demoSeeAll, setDemoSeeAll] = useState(false)
    // **********circle progress hooks start*****************

    const [progress, setProgress] = React.useState(28);
    const [progress1, setProgress1] = React.useState(4);
    const [progress2, setProgress2] = React.useState(30);
    const [progress3, setProgress3] = React.useState(25);
    // **********circle progress hooks end*****************

    // Handle  Model
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
            <div className="breadcrumb">
                <span className='breadcrumb-items'>All Current Campaigns</span>

            </div>
            <div className="users-container">
                <div className="dashboard-active-compaigns-header">
                    <span className="dashboard-active-compaigns-header-heading">{count} of {count} Current Campaings</span>
                   <Link to='/Sophos-reactapp/admin/dashboard'> <span><ArrowBackIcon />Back</span></Link>
                </div>
                <hr />
                {
                    CurrentCompaignList.map((value, index) => {
                        
                        return (
                            <React.Fragment key={value.id}>
                
                                <div>
                                    <div className="dashboard-active-compaigns-container" >
                                        <div className="dashboard-active-compaigns-container-heading-block">
                                            <div className="dashboard-active-compaigns-container-heading-icon">
                                                {/* <StartIcon fontSize="small" /> */}

                                                <img src={value.icon} className='current-compaign-icon' alt="" />
                                            </div>
                                            <div className="dashboard-active-compaigns-container-heading-text">
                                                <span className='heading-text'>{value.name}</span>
                                                <span className='date-text'>Started: {value.date}</span>
                                                <span className='owner-text'>Owner: {value.owner}</span>
                                            </div>
                                        </div>

                                        <div className="dashboard-active-compaigns-container-block">
                                            <div className="dashboard-active-compaigns-container-block1">
                                                <div className="dashboard-active-compaigns-container-blocks">
                                                    <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                        <Link to={`/Sophos-reactapp/admin/campaignDetails/${value.id}`}>
                                                            <CircularProgressWithLabel value={progress} style={{
                                                                color: "#00412B", height: '50px',
                                                                width: '50px',
                                                                cursor: 'pointer',
                                                            }} />
                                                        </Link>
                                                    </span>
                                                    <span className='dashboard-active-compaigns-container-blocks-text'> {value.sendEmail} Emails send</span>
                                                    <span className='dashboard-active-compaigns-user-caught-text-margin'></span>
                                                </div>
                                                <div className="dashboard-active-compaigns-container-blocks">
                                                    <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                        <Link to={`/Sophos-reactapp/admin/campaignDetails/${value.id}`}>
                                                            <CircularProgressWithLabel value={progress1} style={{
                                                                color: "#F77E21", height: '50px',
                                                                width: '50px',
                                                                cursor: 'pointer',
                                                            }} />
                                                        </Link>
                                                    </span>
                                                    <span className='dashboard-active-compaigns-container-blocks-text'> {value.emailOpen} Emails open</span>
                                                    <span className='dashboard-active-compaigns-user-caught-text-margin'></span>
                                                </div>
                                            </div>

                                            <div className="dashboard-active-compaigns-container-block1">
                                                <div className="dashboard-active-compaigns-container-blocks">
                                                    <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                        <Link to={`/Sophos-reactapp/admin/campaignDetails/${value.id}`}>
                                                            <CircularProgressWithLabel value={progress2} style={{
                                                                color: "#990000", height: '50px',
                                                                width: '50px',
                                                                cursor: 'pointer',

                                                            }} />
                                                        </Link>
                                                    </span>
                                                    <span className='dashboard-active-compaigns-container-blocks-text'> {value.userCaught} Users Caught</span>
                                                    <span className='dashboard-active-compaigns-user-caught-text'><span onClick={handleOpen} >Train Them</span></span>

                                                </div>
                                                {/* <div className={fishSeeAll ? "dashboard-active-compaigns-container-blocks " : "dashboard-active-compaigns-container-blocks hide-icon"}> */}
                                                <div className="dashboard-active-compaigns-container-blocks ">
                                                    <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                        <Link to={`/Sophos-reactapp/admin/campaignDetails/${value.id}`}>
                                                            <CircularProgressWithLabel value={progress3} style={{
                                                                color: "#00A1F1", height: '50px',
                                                                width: '50px',
                                                                cursor: 'pointer',
                                                            }} />
                                                        </Link>
                                                    </span>
                                                    <span className='dashboard-active-compaigns-container-blocks-text'> {value.finishedTraining} Finished Training</span>
                                                    <span className='dashboard-active-compaigns-user-caught-text-margin'></span>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                        </React.Fragment>

                        )
                    })
                }

            </div>
            {/* Training Model */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width <= 992 ? mobilestyle : style}>
                  
                  <ChooseTraining/>
                <div className="traing-them-container">
                    <span className="train-them-save-btn">

                    <Button variant="contained" onClick={handleClose} size="small" className='project-create-btn'>Cancel</Button>
                    </span>
                    <span className="train-them-save-btn">
                    <Button variant="contained" type='submit' size="small" className='project-create-btn'>Save</Button>

                    </span>
                </div>  
            </Box>
          </Modal>
        </>
    )
}

export default AllCurrentCompaigns