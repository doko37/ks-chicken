import React from 'react';
import './Home.css';
import HomeBottomHalf from './HomeBottomHalf/HomeBottomHalf';
import image1 from './HomeButtons/Images/homepagechicken.jpeg';


const home = () => {
    return (
        <div className="Home">
            <div className="SlideShow">
                <img className="HomePicture" src={image1} alt="bigboy" />
            </div>
            <HomeBottomHalf />
        </div>
    )
}

export default home;