import React from 'react';
import './ContactUs.css';
import Map from './Map/Map';
import Information from './Information/Information';
import '../Page.css';

const contactUs = () => (
    <div className="ContactUs">
        <Map />
        <div>
            <h1 className="PageTitle">CONTACT US</h1>
            <Information />
        </div>
    </div>
)

export default contactUs;