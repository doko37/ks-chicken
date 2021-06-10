import React from 'react';
import {css} from '@emotion/css';
import './Home.css';
import HomeBottomHalf from './HomeBottomHalf/HomeBottomHalf';
import Slider from './Slider/Slider';

const home = () => {
    const getWidth = () => window.innerWidth;

    return (
        <div className="Home">
            <Slider screenWidth={getWidth} autoPlay={5}/>
            <HomeBottomHalf />
        </div>
    )
}

export default home;