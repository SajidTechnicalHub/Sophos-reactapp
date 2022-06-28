import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from './home.svg'
import Intro from './Intro'
import Feedback from './Feedback'
import DonutChart from 'react-donut-chart';
import { AdminChartsData, TotalUser, LineChartdata } from './HomePageData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GaugeChart from "react-gauge-chart";
import {Doughnut} from 'react-chartjs-2';
import { DoughnutData, DoughnutOptions, plugins } from './HomePageData'

import {Chart, Title,  ArcElement} from 'chart.js'
Chart.register(Title, ArcElement);

const HomePage = () => {


  const activeClass = {
    color: "#0c4160",
    borderBottom: "2px solid #0c4160",


  }
  const notActiveClass = {
    color: "#0c4160",

  }

  const [isClick, SetIsClick] = useState(true)
  const [feedBack, setFeedBack] = useState(false)
  const [intro, setIntro] = useState(true)
  const OnclickEvent = () => {
    if (isClick === true) {

      SetIsClick(false)
    } else {

      SetIsClick(true)
    }


    if (feedBack === false) {
      setFeedBack(true)
      setIntro(false)
    } else {
      setFeedBack(false)
      setIntro(true)
    }
  }

  return (
    <>

      <div className="container-flude">
        <div className="breadcrumb">
          <span className='breadcrumb-items'>Home</span>

        </div>
        <div className="row">

          <div className="col-lg-6 ">
            <img src={Logo} className='home-img' alt="logo image" />
          </div>
          <div className="col-lg-6 mt-3 ">
            <h2>Welcome To PHISHCODE!</h2>
            <p>A solid security awareness program is an integral part of any defense-in-depth strategy.
              PhishCode educates and tests your end users through automated attack simulations, quality
              security awareness training, and actionable reporting metrics. PhishCode provides you with
              the flexibility and customization that
              your organization needs to facilitate a positive security awareness culture.</p>

            <div className='hpmepage-child-navbar mb-2'>

              <span style={intro ? activeClass : notActiveClass} className=' intro-class' onClick={OnclickEvent}  >Intro</span>
              <span style={feedBack ? activeClass : notActiveClass} className='intro-class' onClick={OnclickEvent} >Give Feedback</span>

            </div>
            <div>
              {isClick ? <Intro /> : <Feedback />}
            </div>
          </div>
          {/* <hr className='home-line' /> */}
          <div className="chart-section">
          <hr className='home-line' />
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="charts">
                  <h5>Admin User Graph </h5>
                  <DonutChart
                    data={AdminChartsData}
                    className='donut-chart'
                  />
                  
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="charts">
                  <h5>Total Users</h5>
                  <DonutChart
                    data={TotalUser}
                    className='donut-chart'
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="charts">
                  <h5>Sign-Ins by Admins</h5>
                  <LineChart width={250} height={240} data={LineChartdata}
                    className='line-chart'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                    <Line type="monotone" dataKey="Admin" stroke="#82ca9d" />
                  </LineChart>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="charts">
                  <h5> PhishCode Health Status</h5>
                  <GaugeChart id="gauge-chart3"
                    nrOfLevels={30}
                    colors={["rgb(33, 145, 33)", "green"]}
                    arcWidth={0.3}
                    percent={1}
                    textColor="#1e334a"
                    className='meter-chart'
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage


// https://sajidtechnicalhub.github.io/