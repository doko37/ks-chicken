import React from 'react';
import './Icon.css';
import sideicon from './icon.png';

const icon = (props) => (
    <img onClick={props.toggleSideDrawer} className={props.iconType} src={sideicon} alt="sideicon"/>
)

export default icon;