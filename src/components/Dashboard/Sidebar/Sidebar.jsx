import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './Sidebar.css'

const Sidebar = ({ children }) => {
  //  Hide show CSS Classes
  const Hide = {
    display: 'none',
    
  }
  const Show = {
    display: 'inline-block',
    
  }

  const SidebarHide = {

    Width: '40px',
    overflowY: 'none',
    // marginLeft: '-10px'
  }
  const SidebarShow = {

    Width: '250px',
   
  }

  const MainPagesFullWidth = {
    marginLeft: '270px',

  }
  const MainPagesHalfWidth = {
    marginLeft: '110px',
    
  }

  const [changeclass, setChangeClass] = useState(Hide);
  const [sidebar, setSidebar] = useState(Show);
  const [sidebartoggle, setSidebarToggle] = useState(SidebarShow)
  const [sidebarwidth, setSidebarWidth] = useState(MainPagesFullWidth)

  const DropdownEvent = () => {

    if (changeclass.display === 'inline-block') {

      setChangeClass(Hide)
      console.log(changeclass);
    } else {
      setChangeClass(Show)
      console.log(changeclass);
    }

  }

  const SidebarEvent = () => {

    if (sidebar.display === 'inline-block') {

      setSidebar(Hide)

      setSidebarWidth(MainPagesHalfWidth)
      // console.log(sidebar);
    } else {
      setSidebar(Show)
      setSidebarWidth(MainPagesFullWidth)
      // console.log(sidebar);
    }


    if (sidebartoggle.display === 'inline-block') {

      setSidebarToggle(SidebarHide)
      console.log(sidebartoggle);
    } else {
      setSidebarToggle(SidebarShow)
      console.log(sidebartoggle);
    }

  }

  return (
    <>
      <div className="main-container">
        <div className='sidebar' style={sidebartoggle}  >
          <hr className='sidebarLine' />
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="sidebarTitle ">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <CottageOutlinedIcon className='sidebarListItemIcon' />
                {/* <span className='sidebarTitleText'>Home</span> */}
                <span className='leftErrow'>
                  <Link to='/' className='sidebarTitleText hideTitle ' style={sidebar}>Home</Link>

                  <span className=' hideTitle ' onClick={SidebarEvent}><ArrowLeftOutlinedIcon  className='leftErrowStyle'/></span>
                </span>
              </div>


              <div className="sidebarTitle ">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <DashboardOutlinedIcon className='sidebarListItemIcon' />
                <Link to='dashboard' className='sidebarTitleText hideTitle' style={sidebar}>Dashboard</Link>

              </div>
              <div className="sidebarTitle" onClick={DropdownEvent}>


                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <AdminPanelSettingsOutlinedIcon className='sidebarListItemIcon' />
                <span className='sidebarTitleDropdown hideTitle' style={sidebar} >Administration
                  <ArrowDropDownOutlinedIcon className='hideTitle' style={sidebar} /></span>

              </div>
              <ul className="sidebarList" style={changeclass} >
                <li className="sidebarListItem">
                  {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                  <PersonOutlineOutlinedIcon className='sidebarListItemIcon' />
                  <span className='hideTitle' style={sidebar}>Users</span>
                </li>
                <li className="sidebarListItem">
                  {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                  <GroupsOutlinedIcon className='sidebarListItemIcon' />
                  <span className='hideTitle' style={sidebar}>Groups</span>
                </li>
                <li className="sidebarListItem">
                  {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                  <GppGoodOutlinedIcon className='sidebarListItemIcon' />
                  <span className='hideTitle' style={sidebar}> Roles</span>
                </li>
              </ul>
              <div className="sidebarTitle">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                
                <LocalPostOfficeOutlinedIcon className='sidebarListItemIcon' / >
                <span className='hideTitle' style={sidebar}>Email Setup</span>
              </div>
              <div className="sidebarTitle">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <ContactMailOutlinedIcon className='sidebarListItemIcon' />
        
                <span className='hideTitle' style={sidebar}>Email Templates</span>
              </div>
              <div className="sidebarTitle">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                
                <AddBusinessOutlinedIcon className='sidebarListItemIcon' />
                <span className='hideTitle' style={sidebar}>Compaigns</span>
              </div>
              <div className="sidebarTitle">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <SettingsOutlinedIcon className='sidebarListItemIcon' />
                <span className='hideTitle' style={sidebar}>Settings</span>
              </div>


            </div>
            <br />
            <br />
          </div>
          <hr className='sidebarLine' />
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="sidebarTitle">
                {/* <FontAwesomeIcon icon={faCheck} className='sidebarListItemIcon'></FontAwesomeIcon> */}
                <LoginOutlinedIcon className='sidebarListItemIcon' />
                <span className='hideTitle' style={sidebar}>Logout</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mainpages' style={sidebarwidth}>{children}</div>
      </div>
    </>
  )
}

export default Sidebar