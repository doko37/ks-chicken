import React from 'react';
import './ContactUs.css';
import Map from './Map/Map';
import Information from './Information/Information';
import '../Page.css';
import filler from './background2.PNG';

const contactUs = () => (
    <div>
        <div>
            <img className="filler "src={filler} alt="filler"/>
        </div>
        <div className="fillerline"/>
        <div className="ContactUs">
            <div>
                <h1 className="PageTitle">OUR STORE</h1>
                <Information />
            </div>
            <Map />
        </div>
    </div>
)

export default contactUs;