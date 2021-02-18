import React from 'react';
import './Info.css';

const info = (props) => (
    <div className="Info">
        <div className="InfoContent">
            {props.children}
        </div>
    </div>
)

export default info;