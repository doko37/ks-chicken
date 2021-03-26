import React from 'react';
import './HomeButtons.css';
import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

const menuButton = () => (
    <div className="img">
        <Link to="/menu" className="p">MENU</Link>
    </div>
)

export default menuButton;