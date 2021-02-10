import React from 'react';
import './HomeButtons.css';

const homeButton = () => (
    <div className="HomeButton">
        <div className="img2">
            <a href="/menu" className="p2">MENU</a>
        </div>
        <div className="img1">
            <a href="/contact-us" className="p1">CONTACT US</a>
        </div>
    </div>
)

export default homeButton;