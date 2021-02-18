import React from 'react';
import Items from '../../Items/Items';
import '../../Menu.css';

const lunchMiddle = () => (
    <div>
        <h1 className="MenuTitle">Meat Options</h1>
        <h1 className="MenuTitle">Salad Options</h1>
        <Items listName="lunchSalads"/>
    </div>
)

export default lunchMiddle;