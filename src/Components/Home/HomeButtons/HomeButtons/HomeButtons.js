import React from 'react';
import './HomeButtons.css';
import MenuButton from './MenuButton';
import LunchButton from './LunchButton';
import ContactUsButton from './ContactUsButton';
const homeButtons = () => (
    <div className="HomeButtons">
        <MenuButton />
        <LunchButton />
        <ContactUsButton />
    </div>
)

export default homeButtons;