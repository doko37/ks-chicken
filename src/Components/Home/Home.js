import React, {useState} from 'react';
import './Home.css';
import HomeBottomHalf from './HomeBottomHalf/HomeBottomHalf';
import Slider from './Slider/Slider';

const home = () => {
    return (
        <div className="Home">
            <Slider/>
            <HomeBottomHalf />
        </div>
    )
}

export default home;