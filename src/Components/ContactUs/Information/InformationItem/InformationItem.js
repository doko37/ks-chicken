import React from 'react';
import './InformationItem.css';

const informationItem = (props) => (
    <li className="InformationItem">
        <img className="Icon" src={props.icon} alt="icon" width="20rem" height="20rem"/>
        <span><a className={props.haveLink ? "Link" : null}href={props.haveLink ? props.link : null} target="_blank">{props.children}</a></span>
    </li>
)

export default informationItem;