import React from 'react';
//import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import HomeBottomHalf from './HomeBottomHalf/HomeBottomHalf';
import image1 from './HomeButtons/Images/homepagechicken.jpeg';
/*import image2 from './HomeButtons/Images/image2.PNG';
import image3 from './HomeButtons/Images/image3.PNG';
import image4 from './HomeButtons/Images/image4.png'; */

const home = () => {
    /*const properties = {
        transitionDuration: 500,
        pauseOnHover: true,
        easing: 'ease',
    } */

    return (
        <div className="Home">
            <img className="HomePicture" src={image1} alt="HomeImage"/>
            <HomeBottomHalf />
        </div>
    )
}

export default home;
            /*<div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <img className="img1" src={image1} alt="img1"/>
                    </div>
                    <div className="each-slide">
                        <img className="img1" src={image2} alt="img2"/>
                    </div>
                    <div className="each-slide">
                        <img className="img1" src={image3} alt="img3"/>
                    </div>
                    <div className="each-slide">
                        <img className="img1" src={image4} alt="img4"/>
                    </div>
                </Slide>
            </div> */