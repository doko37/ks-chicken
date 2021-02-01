import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './FullContainer.css';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const fullContainer = () => {
    const [drawerState, setDrawerState] = useState(false)
    
    const toggleSideDrawerHandler = () => {
        setDrawerState(!drawerState)
    }
        
    return (
        <div className="FullContainer">
            <Toolbar toggleSideDrawer={toggleSideDrawerHandler}/>
            <SideDrawer toggleSideDrawer={toggleSideDrawerHandler} sideDrawerState={drawerState}/>
            <Route path="/" exact component={Home}/> 
            <Route path="/menu" component={Menu}/>
            <Route path="/contact-us" component={ContactUs}/>
        </div>
    )
}


export default fullContainer;