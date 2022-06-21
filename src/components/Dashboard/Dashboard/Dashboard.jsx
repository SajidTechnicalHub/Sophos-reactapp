import React, { useState } from 'react'
import './Dashboard.css'
import CurrentCompaigns from './CurrentCompaigns';
import Simulation from './Simulation';
import Training from './Training';
import SimulationCverage from './SimulationCoverage';
import SimulationRecomended from './SimulationRecomended';


const Dashboard = () => {

  return (
    <>
      <div className="breadcrumb">
        <span className='breadcrumb-items'>Dashboard</span>

      </div>
      <div className="users-container dashboard">

        <div className="dashboard-header">
          <span>PhishCode dashboards provide insights into campaign results on user susceptibility
            and allow you to measure overall risk levels across your entire organization. <span><a href="">Learn More</a></span></span>

          <hr />
          <br />
          {/* **********Current Compaigns start**************** */}
          <div className="dashboard-avtive-compaigns">
            <CurrentCompaigns />
          </div>
          {/* **********Current Compaigns End**************** */}
          <br />
          {/* <div className="simulation-training-block"> */}
          <div className="row">
            <div className="col-lg-8">

              {/* **********Simulation Start**************** */}
              <div className="simulation-block">
                <Simulation />
              </div>
            </div>
            {/* **********Simulation End**************** */}

            {/* **********Training Start**************** */}
            <div className="col-lg-4">
              <div className="training-block">
                <Training />
              </div>
            </div>
            {/* **********Training end**************** */}
          </div>
          <br />
          {/* **********Simulation Recomendation and Coverage Block Start******* */}

          {/* <div className="simulation-training-block"> */}
          <div className="row">
            <div className="col-lg-8">

              {/* **********Simulation Recomendation Start**************** */}
              <div className="simulation-block">
                <SimulationRecomended />
              </div>
            </div>

            {/* **********Simulation  Coverage Start**************** */}
            <div className="col-lg-4">
              <div className="training-block">
                <SimulationCverage />
              </div>
            </div>
            {/* **********Simulation  Coverage End**************** */}
          </div>

        </div>
        {/* **********Simulation Recomendation and Coverage Block End******* */}
      </div>
    </>
  )
}

export default Dashboard