import React from 'react';
import './ContactUs.css';
import Map from './Map/Map';
import Information from './Information/Information';
import '../Page.css';

const contactUs = () => (
    <div className="ContactUs">
        <div>
            <h1 className="PageTitle">CONTACT US</h1>
            <Information />
        </div>
        <Map />
    </div>
)

export default contactUs;