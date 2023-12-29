import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  console.log("NavigationBar rendered");
  return (
    <AppBar position="static">
      <Tabs>
        <Tab label="Point of Sale" component={NavLink} to="/" activeStyle={{ color: 'red' }} end />
        <Tab label="Menu Creator" component={NavLink} to="/menu-creator" activeStyle={{ color: 'red' }} end />
      </Tabs>
    </AppBar>
  );
};


export default NavigationBar;
