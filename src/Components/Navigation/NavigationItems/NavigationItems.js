import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <div className={props.SideDrawer ? "SideDrawerNavigationItems" : "NavigationItems"}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/menu">Menu</NavigationItem>
        <NavigationItem link="/contact-us">Our Store</NavigationItem>
    </div>
)

export default navigationItems;