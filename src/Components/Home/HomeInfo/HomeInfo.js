import React from 'react';
import './HomeInfo.css';

import Info from './Info/Info';

const homeInfo = () => (
    <div className="HomeInfo">
        <Info>
            <h4 className="HomeInfoTitle">Hours:</h4>
            <p>Monday - Thursday: 11am ~ 8:30pm</p>
            <p>Friday: 11am ~ 9pm</p>
            <p>Saturday: 12am ~ 9pm</p>
            <p>Sunday: Closed</p>
        </Info>
        <div className="InfoSeperator"/>
        <Info middle>
            <h4 className="HomeInfoTitle">Phone Number:</h4>
            <p>09-476-1952</p>
        </Info>
        <div className="InfoSeperator"/>
        <Info>
            <h4 className="HomeInfoTitle">Location:</h4>
            <p>33b Triton Drive, Rosedale, Auckland 0632</p>
        </Info>
    </div>
)

export default homeInfo;