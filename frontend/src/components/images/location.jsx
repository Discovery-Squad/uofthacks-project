import React from 'react';
import styled from 'styled-components';
import locImg from '../../assets/images/locicon.svg';

const LocationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 55vw;
`;

const LImg = styled.img`
    width: 30px;
    height: 30px;
`;

export function LocationImg () {
    return (
        <LocationContainer>
            <LImg src ={locImg}/>
        </LocationContainer>
    )
}