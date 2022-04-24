import React from 'react'
import './ProjectsLayout.css'
import { Outlet } from "react-router-dom";
import Header from '../Home/Header';
const ProjectLayout = () => {
  return (
    <>
      <Header />
      <div className="project-section">
        <Outlet />
      </div>
    </>
  )
}

export default ProjectLayout