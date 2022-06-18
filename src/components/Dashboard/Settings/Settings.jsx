import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Settings.css'
import { Link } from 'react-router-dom';
import AccountSettings from './AccountSettings';
import HelpSupport from './HelpSupport';
import License from './License';

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
const Settings = () => {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <>

      <div className="breadcrumb">
        <span className='breadcrumb-items'>Settings</span>

      </div>
      <div className="users-container">
        

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
                <Tab  label="Account & Settings" {...a11yProps(0)} />
                <Tab label="Help & Support" {...a11yProps(1)} />
                <Tab label="License" {...a11yProps(2)} />

              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <AccountSettings />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <HelpSupport />
            </TabPanel>
            <TabPanel value={value} index={2}>
            <License />
            </TabPanel>
          </Box>

        </div>
      </div>


    </>
  )
}

export default Settings