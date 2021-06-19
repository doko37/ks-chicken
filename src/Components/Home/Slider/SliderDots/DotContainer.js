import React from 'react';
import styled from '@emotion/styled';

const DotContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 150px;
    height: fit-content;
    left: 50%;
    margin-left: -75px;
    @media (max-width: 999px) {
        width: 75px;
        margin-left: -37.5px;
      }
`

export default DotContainer;