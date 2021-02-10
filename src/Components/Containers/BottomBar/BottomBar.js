import React from 'react';
import './BottomBar.css';

const bottomBar = (props) => (
    <div className={props.type}>
        <p className="BottomDescription">
            KS CHICKEN
        </p>
        <p className="BottomDescription">
            33b Triton Drive, Rosedale, Auckland 0632
        </p>
        <p className="BottomDescription">
            09-476-1952
        </p>
    </div>
)

export default bottomBar;