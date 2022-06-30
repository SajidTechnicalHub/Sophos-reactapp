import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Compaigns.css'
import { Link } from 'react-router-dom';
import AllCompaign from './Compaign Tabs/PastCompaign'
import CurrentCompaign from './Compaign Tabs/CurrentCompaign';
import ScheduleCompaing from './Compaign Tabs/ScheduleCompaing';

// import useWindowDimensions from '../../../useWindowDimensions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Compaigns = () => {
  // const { height, width } = useWindowDimensions();
  const [q, setQ] = useState("")

  // const handleDelete = (id) => {

  //   setGroups(groups.filter((item) => item.id !== id))

  // }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Search = (groups) => {
    return groups.filter(
      (row) =>
        row.Name.toLowerCase().indexOf(q) > -1 ||
        row.Name.indexOf(q) > -1

    );
  }
  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Campaigns</span>

      </div>
      <div className="compaign users-container">
        {/* <hr /> */}
        <div className="users-header border">
          <div className="users-header-contents">
            {/* <h5>All Users</h5> */}
            <div className="users-search">
              <SearchIcon className='users-search-icon' />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder='Search Here.'
                className='users-input-search' />

              <select
                name=""
                id=""
                className='user-manu'
              >

                <option value='compaign'> All Campaigns</option>
                <option value='phishing'>Phishing</option>
                <option value='harvesting'>Credential Harvesting</option>
                <option value='attachment'>Attachment</option>
              </select>
            </div>
            <Link to='/Sophos-reactapp/admin/compaign'>
              <Button variant="contained" size="small" className='add-users-btn'>New Campaign</Button>
            </Link>
          </div>
          {/* <hr /> */}
        </div>

        <div className='compaign-content-section'>

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Current Campaigns" {...a11yProps(0)} />
                <Tab label="Schedule Campaigns" {...a11yProps(1)} />
                <Tab label="All Campaigns" {...a11yProps(2)} />

              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CurrentCompaign />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ScheduleCompaing />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AllCompaign />
            </TabPanel>
          </Box>

        </div>
      </div>


    </>
  )
}

export default Compaigns