import React from 'react';
import './HomeButtons.css';
import {Link} from 'react-router-dom';

const contactUsButton = () => (
    <div className="img3">
        <Link to="/contact-us" className="p">CONTACT US</Link>
    </div>
)

export default contactUsButton;