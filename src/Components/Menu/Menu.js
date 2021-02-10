import React from 'react';
import './Menu.css';
import Items from './Items/Items';
import '../Page.css';

const menu = () => (
    <div>
        <h1 className="PageTitle">MENU</h1>
        <div className="Menu">
            <h1 className="MenuTitle">Chicken</h1>
            <Items listName="chicken"/>
            <h1 className="MenuTitle">Sides</h1>
            <Items listName="sides"/>
        </div>
    </div>
)

export default menu;