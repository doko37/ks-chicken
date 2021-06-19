import React from 'react';
import {css} from '@emotion/css';
import iconsvg from '../../Navigation/SideDrawer/Icon/icon.png';

const arrowleft = css`
position: absolute;
top: 50%;
z-index: 1;
height: 60px;
width: 60px;
background-color: rgba(0, 0, 0, 0.2);
border-radius: 4rem;
margin-left: 0.5rem;
@media (max-width: 999px) {
  height: 40px;
  width: 40px;
  top: 45%;
}
&:hover {
    background-color: rgba(0, 0, 0, 0.5);
}
`

const arrowright = css`
position: absolute;
top: 50%;
right: 0;
z-index: 1;
height: 60px;
width: 60px;
transform: rotate(180deg);
background-color: rgba(0, 0, 0, 0.2);
border-radius: 4rem;
margin-right: 0.5rem;
@media (max-width: 999px) {
  height: 40px;
  width: 40px;
  top: 45%;
}
&:hover {
    background-color: rgba(0, 0, 0, 0.5);
}
`

const Arrow = props => (
    props.direction == 'right' ? <img src={iconsvg} className={arrowright} onClick={props.nextSlide}/> : <img src={iconsvg} className={arrowleft} onClick={props.nextSlide}/>
)

export default Arrow;