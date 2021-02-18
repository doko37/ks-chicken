import React from 'react';
import './HomeBottomHalf.css';
import HomeButtons from '../HomeButtons/HomeButtons/HomeButtons';
import HomeInfo from '../HomeInfo/HomeInfo';

const homeBottomHalf = () => (
    <div className="HomeBottomHalf">
        <HomeButtons />
        <HomeInfo />
    </div>
)

export default homeBottomHalf;
