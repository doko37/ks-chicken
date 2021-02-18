import React from 'react';
import './Item.css';
import Description from './Description/Description';

const item = (props) => (
    <div className="Item">
        <img className="chicken" src={props.picture} alt="chicken" />
        <Description title={props.title} description={props.description} price={props.price} lunch={props.lunch}/>
    </div>
)

export default item;