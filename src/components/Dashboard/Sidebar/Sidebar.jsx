import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'
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
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Sidebar.css'

const Sidebar = () => {
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
    marginLeft: '220px',


  }
  const MainPagesHalfWidth = {
    marginLeft: '90px',

  }

  const [changeclass, setChangeClass] = useState(Hide);
  const [sidebar, setSidebar] = useState(Show);
  const [sidebartoggle, setSidebarToggle] = useState(SidebarShow)
  const [sidebarwidth, setSidebarWidth] = useState(MainPagesFullWidth)
  const [isErrow, setIsErrow] = useState(true)

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
    if (isErrow ===false){
      setIsErrow(true)
    }else{
      setIsErrow(false)
    }
    
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
                <Link to='Home'><CottageOutlinedIcon className='sidebarListItemIcon' /></Link>
                {/* <span className='sidebarTitleText'>Home</span> */}
                <span className='leftErrow'>
                  <Link to='Home' className='sidebarTitleText hideTitle ' style={sidebar}>Home</Link>
                  {isErrow ?
                    <span className=' hideTitle ' onClick={SidebarEvent}><ArrowLeftOutlinedIcon className='leftErrowStyle' /></span>
                    : <span className=' hideTitle ' onClick={SidebarEvent}><ArrowRightIcon className='leftErrowStyle' /></span>
                  }
                </span>
              </div>


              <div className="sidebarTitle ">
                <Link to='dashboard'>
                  <DashboardOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Dashboard</span></Link>

              </div>
              <div className="sidebarTitle" onClick={DropdownEvent}>


                <AdminPanelSettingsOutlinedIcon className='sidebarListItemIcon' />
                <span className='sidebarTitleDropdown hideTitle' style={sidebar} >Administration
                  <ArrowDropDownOutlinedIcon className='hideTitle' style={sidebar} /></span>

              </div>
              <ul className="sidebarList" style={changeclass} >
                <li className="sidebarListItem user-margin-top">

                  <Link to='users'>
                    <PersonOutlineOutlinedIcon className='sidebarListItemIcon' />
                    <span className='sidebarTitleText hideTitle' style={sidebar}>Users </span>
                  </Link>
                </li>
                <li className="sidebarListItem ">

                  <Link to='groups'>
                    <GroupsOutlinedIcon className='sidebarListItemIcon' />
                    <span className='sidebarTitleText hideTitle' style={sidebar}>Groups</span>
                  </Link>
                </li>
                <li className="sidebarListItem role-margin-buttom ">

                  <Link to='roles'>
                    <GppGoodOutlinedIcon className='sidebarListItemIcon' />
                    <span className='sidebarTitleText hideTitle' style={sidebar}> Roles</span>
                  </Link>
                </li>
              </ul>
              <div className="sidebarTitle">
                <Link to='emailSetup'>
                  <LocalPostOfficeOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Email Setup</span></Link>
              </div>
              <div className="sidebarTitle">
                <Link to='emailTemplates'>
                  <ContactMailOutlinedIcon className='sidebarListItemIcon' />

                  <span className='sidebarTitleText hideTitle' style={sidebar}>Email Templetes</span>
                </Link>
              </div>
              <div className="sidebarTitle">
                <Link to='compaigns'>
                  <AddBusinessOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Compaigns</span>
                </Link>
              </div>
              <div className="sidebarTitle">
                <Link to='learninghub'>
                  <HubOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Learning Hub</span>
                </Link>
              </div>
              <div className="sidebarTitle">
                <Link to='settings'>
                  <SettingsOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Settings</span></Link>
              </div>


            </div>
           <br />
          </div>
          <hr className='sidebarLine' />
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="sidebarTitle logout-margin">
                <Link to='logout'>
                  <LoginOutlinedIcon className='sidebarListItemIcon' />
                  <span className='sidebarTitleText hideTitle' style={sidebar}>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mainpages' style={sidebarwidth}><Outlet /></div>
      </div>
    </>
  )
}

export default Sidebar