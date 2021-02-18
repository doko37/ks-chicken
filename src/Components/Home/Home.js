import React from 'react';
import './Home.css';
import HomeBottomHalf from './HomeBottomHalf/HomeBottomHalf';
import bigboy from './HomeButtons/Images/homepagechicken.jpeg';

const home = () => (
    <div className="Home">
        <img className="HomePicture" src={bigboy} alt="headerpicture"/>
        <HomeBottomHalf />
    </div>
)

export default home;