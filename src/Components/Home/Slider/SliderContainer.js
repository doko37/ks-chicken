import React from 'react';
import styled from '@emotion/styled';

const SlideContainer = styled.div`
  transform: translateX(-${props => props.translate * 1400}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width * 1400}px;
  display: flex;

  @media (max-width: 1399px) {
    transform: translateX(-${props => props.translate * 1000}px);
    width: ${props => props.width * 1000}px;
  }

  @media (max-width: 999px) {
    transform: translateX(-${props => props.translate * window.innerWidth}px);
    width: ${props => props.width * (window.innerWidth)}px;
  }
`

export default SlideContainer;