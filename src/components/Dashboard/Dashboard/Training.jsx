import React, { useState } from 'react'

const Training = () => {

    return (
        <>

            <div className="training-title">Fishing Awaireness Training Completion</div>
            
                <h3>60% Users have complete training</h3>
                <p>Awairness Training Status</p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            <div className="training-status">
                <div className="traning-status-block">
                    <span className="training-status-1"></span>
                    <span className="traning-status-text">
                        Completed
                    </span>
                </div>
                <div className="traning-status-block">
                <span className="training-status-2"></span>
                    <span className="traning-status-text">
                        Inompleted
                    </span>
                </div>
            </div>

            <button className='simulation-btn'>View Training Completion Report</button>

        </>
    )
}

export default Training