import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from './logo.png';
import Icon from '../SideDrawer/Icon/Icon';

const toolbar = (props) => (
    <div className="TbBackground">
        <div className="Toolbar">
            <a href="/"><img src={logo} className="Logo" alt="logo"/></a>
            <Icon iconType="SideIcon" toggleSideDrawer={props.toggleSideDrawer} sideDrawerState={props.sideDrawerState}/>
            <NavigationItems />
        </div>
    </div>
)

export default toolbar;