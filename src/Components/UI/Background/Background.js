import React from 'react';
import './Background.css';

const background = (props) => (
    props.show ? <div onClick={props.toggleSideDrawer} className="Background"></div> : null
)

export default background;