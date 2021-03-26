import React from 'react';
import {Link} from 'react-router-dom';
import './HomeButtons.css';

const lunchButton = () => (
    <div className="img2">
        <Link to="/menu#lunch" className="p">LUNCH</Link>
    </div>
)

export default lunchButton;