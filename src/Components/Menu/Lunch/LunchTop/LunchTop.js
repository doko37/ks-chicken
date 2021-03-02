import React from 'react';
import './LunchTop.css';

const lunchTop = () => (
    <div className="LunchTop">
        <div className="SizeDescription">
            <h4 className="SizeTitle">Medium</h4>
            <p>Choose up to 2 choices of meat and 3 choices of salad.</p>
            <p><strong>Price:</strong> $11</p>
        </div>
        <div className="SizeDescription2">
            <h4 className="SizeTitle">Large</h4>
            <p>Choose up to 3 choices of meat and 3 choices of salad.</p>
            <p><strong>Price:</strong> $14</p>
        </div>
    </div>
)

export default lunchTop;