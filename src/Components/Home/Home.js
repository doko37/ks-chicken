import React from 'react';
import './Home.css';
import HomeButtons from './HomeButtons/HomeButtons';
import HomeInfo from './HomeInfo/HomeInfo';

const home = () => (
    <div className="Home">
        <HomeButtons />
        <HomeInfo />
    </div>
)

export default home;