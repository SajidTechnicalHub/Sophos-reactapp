import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SimulationCverage = () => {

    return (
        <>

            <div className="simulation-coverage-title">Attack Simulation Coverage</div>
            
                <h3>69% Users have not experienced the Simulation</h3>
                <p>Simulated Users</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '69%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">69%</div>
                </div>
            <div className="training-status">
                <div className="traning-status-block">
                    <span className="training-status-1"></span>
                    <span className="traning-status-text">
                    Simulated Users
                    </span>
                </div>
                <div className="traning-status-block">
                <span className="training-status-2"></span>
                    <span className="traning-status-text">
                    Non-Simulated Users
                    </span>
                </div>
            </div>

            {/* <button className='simulation-btn'>View Simulation Coverage Report</button> */}
            <Link to=''> <span className='simulation-btn'>View Simulation Coverage Report</span></Link>

        </>
    )
}

export default SimulationCverage