import React from 'react';
import './Item.css';
import Description from './Description/Description';

const item = (props) => (
    <div className="Item">
        <img className="chicken" src={props.picture} alt="chicken" />
        <Description title={props.title} description={props.description} price={props.price} options={props.options} lunch={props.lunch} main={props.main}/>
    </div>
)

export default item;