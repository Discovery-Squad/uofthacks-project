import React from 'react';
import styled from 'styled-components';
import goImg from '../../assets/images/goButton.svg';

const GoMapImg = styled.img`
    display: flex;
    width: 92%;
    height: 100%;
`;

export function GoImg () {
    return (
        <GoMapImg src={goImg}/>
    )
}