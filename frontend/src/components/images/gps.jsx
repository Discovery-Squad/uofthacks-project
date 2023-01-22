import React from 'react';
import styled from 'styled-components';
import gpsImg from '../../assets/images/gps.svg';

const GpsRuntImg = styled.img`
    display: flex;
    width: 90%;
    height: 80%;
`;

export function FrameGpsImg () {
    return (
        <GpsRuntImg src={gpsImg}/>
    )
}