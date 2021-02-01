import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Background from '../../UI/Background/Background';
import Icon from './Icon/Icon';
import './SideDrawer.css';

const sideDrawer = (props) => (
    <div>
        <Background show={props.sideDrawerState} toggleSideDrawer={props.toggleSideDrawer}/>
        <div className={["SideDrawer", props.sideDrawerState ? "Opened" : "Closed"].join(' ')}>
            <Icon iconType="OpenedSideIcon" toggleSideDrawer={props.toggleSideDrawer} sideDrawerState={props.sideDrawerState}/>
            <div className="SideDrawerItems">
                <nav>
                    <NavigationItems SideDrawer={props.sideDrawerState}/>
                </nav>
            </div>
        </div>
    </div>
)

export default sideDrawer;