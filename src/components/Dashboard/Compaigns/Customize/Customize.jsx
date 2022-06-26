import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AttackEmail from './AttackEmail';
import RemainderEmail from './RemainderEmail';
import CaughtLanding from './CaughtLanding';
import AttackEmailTemplate from './AttackEmailTemplate';

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

export default function Customize() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
            
          <Tab label="Attack Email" {...a11yProps(0)} />
          {/* <Tab label="Remainder Email" {...a11yProps(1)} />
          <Tab label="Caught Landing" {...a11yProps(2)} /> */}

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AttackEmail />
        <AttackEmailTemplate />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <RemainderEmail />
        <AttackEmailTemplate />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CaughtLanding />
        <AttackEmailTemplate />
      </TabPanel> */}
    </Box>
  );
}
