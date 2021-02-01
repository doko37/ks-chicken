import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from './logo.png';
import Icon from '../SideDrawer/Icon/Icon';

const toolbar = (props) => (
    <div className="Toolbar">
        <img src={logo} className="Logo" alt="logo"/>
        <Icon iconType="SideIcon" toggleSideDrawer={props.toggleSideDrawer} sideDrawerState={props.sideDrawerState}/>
        <NavigationItems />
    </div>
)

export default toolbar;