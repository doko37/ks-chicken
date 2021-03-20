import React from 'react';
import {css} from '@emotion/css';

const Slide = props => (
    <div className={css`
        height: 100%;
        width: 100%;
        background-image: url('${props.content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `}/>
)

export default Slide;