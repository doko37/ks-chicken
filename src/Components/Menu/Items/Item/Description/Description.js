import React from 'react';
import './Description.css';

const description = (props) => (
    <div className="Description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        { !props.lunch ? <p><strong>Price: </strong>{props.price}</p> : null }
    </div>
)

export default description;