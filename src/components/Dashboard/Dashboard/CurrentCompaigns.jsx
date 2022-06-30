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
import {CurrentCompaignList} from './DashboardData'



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

// **********circle progress function start*****************



// React.useEffect(() => {
//   const timer = setInterval(() => {
//     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//   }, 800);
//   return () => {
//     clearInterval(timer);
//   };
// }, []);


const CurrentCompaigns = () => {

    const [count, setCount] = useState(CurrentCompaignList.length)
    // **********circle progress hooks start*****************

    const [progress, setProgress] = React.useState(28);
    const [progress1, setProgress1] = React.useState(4);
    const [progress2, setProgress2] = React.useState(30);
    const [progress3, setProgress3] = React.useState(25);
    // **********circle progress hooks end*****************
    return (
        <>
            <div className="dashboard-active-compaigns-header">
                <span className="dashboard-active-compaigns-header-heading">3 of {count} Current Campaings</span>
                <Link to="/Sophos-reactapp/admin/currentCompaigns">See all</Link>
            </div>
            <hr />
            {
                CurrentCompaignList.map((value, index) => {
                    
                    return (
                        <React.Fragment key={value.id}>
                        {index >= 0 && index <= 2 ?
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
                                            <span className='dashboard-active-compaigns-container-blocks-circle'> <CircularProgressWithLabel value={progress} style={{
                                                color: "#00412B", height: '50px',
                                                width: '50px',
                                            }} /></span>
                                            <span className='dashboard-active-compaigns-container-blocks-text'> {value.sendEmail} Emails send</span>
                                        </div>
                                        <div className="dashboard-active-compaigns-container-blocks">
                                            <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                <CircularProgressWithLabel value={progress1} style={{
                                                    color: "#F77E21", height: '50px',
                                                    width: '50px',
                                                }} />
                                            </span>
                                            <span className='dashboard-active-compaigns-container-blocks-text'> {value.emailOpen} Emails open</span>
                                        </div>
                                    </div>

                                    <div className="dashboard-active-compaigns-container-block1">
                                        <div className="dashboard-active-compaigns-container-blocks">
                                            <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                <CircularProgressWithLabel value={progress2} style={{
                                                    color: "#990000", height: '50px',
                                                    width: '50px',
                                                }} />
                                            </span>
                                            <span className='dashboard-active-compaigns-container-blocks-text'> {value.userCaught} Users Caught</span>
                                        </div>
                                        {/* <div className={fishSeeAll ? "dashboard-active-compaigns-container-blocks " : "dashboard-active-compaigns-container-blocks hide-icon"}> */}
                                        <div className="dashboard-active-compaigns-container-blocks ">
                                            <span className='dashboard-active-compaigns-container-blocks-circle'>
                                                <CircularProgressWithLabel value={progress3} style={{
                                                    color: "#00A1F1", height: '50px',
                                                    width: '50px',
                                                }} />
                                            </span>
                                            <span className='dashboard-active-compaigns-container-blocks-text'> {value.finishedTraining} Finished Training</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <hr />
                            </div>:
                        <div></div>}
                        </React.Fragment>
                        
                    )
                })
            }


        </>
    )
}

export default CurrentCompaigns