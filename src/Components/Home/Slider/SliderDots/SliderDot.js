import React from 'react';
import {css} from '@emotion/css';

const SliderDots = props => {
    const dotCSS = css`
    border-radius: 6rem;
    background-color: rgba(0, 0, 0, 0.4);
    height: 20px;
    width: 20px;
    border: ${props.show ? '1px solid white' : '1px solid rgba(0, 0, 0, 0.0)'};
    @media (max-width: 999px) {
        height: 10px;
        width: 10px;
      }
    `

    return (
        <div className={dotCSS} />
    )
}

export default SliderDots;