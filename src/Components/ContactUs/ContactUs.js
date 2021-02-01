import React from 'react';
import './ContactUs.css';
import Map from './Map/Map';
import Information from './Information/Information';
import BottomBar from '../Containers/BottomBar/BottomBar';
import '../Page.css';

const contactUs = () => (
    <div>
        <h1 className="PageTitle">CONTACT US</h1>
        <BottomBar />
        <div className="ContactUs">
            <Map />
            <Information />
        </div>
    </div>
)

export default contactUs;