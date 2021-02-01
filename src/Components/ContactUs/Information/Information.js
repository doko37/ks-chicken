import React from 'react';
import InformationItem from './InformationItem/InformationItem';
import './Information.css';

import phone from './Icons/phone.jpg';
import map from './Icons/map.png';
import spoon from './Icons/spoon.ico';
import hourglass from './Icons/hourglass.png';

const information = () => (
    <div className="Information">
        <ul>
            <InformationItem icon={phone}>09-746-1952</InformationItem>
            <InformationItem icon={map} haveLink link="https://goo.gl/maps/Jubyrd8UAWsWne7Q9">33b Triton Drive, Rosedale, Auckland 0632</InformationItem>
            <InformationItem icon={spoon} haveLink link="https://www.zomato.com/auckland/ks-chicken-ks-rosedale">Zomato</InformationItem>
            <InformationItem icon={hourglass}>
                <div>
                    <p>Monday - Thursday: 11am ~ 8:30pm</p>
                    <p>Friday: 11am ~ 9pm</p>
                    <p>Saturday: 12am ~ 9pm</p>
                </div>
            </InformationItem>
        </ul>
    </div>
)

export default information;