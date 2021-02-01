import React from 'react';
import './Description.css';

const description = (props) => (
    <div className="Description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p><strong>Price: </strong>{props.price}</p>
    </div>
)

export default description;