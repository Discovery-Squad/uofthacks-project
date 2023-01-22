import React from 'react';
import styled from 'styled-components';
import frameImg from '../../assets/images/frame2.png';

const MainFrameImg = styled.img`
    display: flex;
    width: 100%;
    height: 30vh;
`;

export function HistoImg () {
    return (
        <MainFrameImg src={frameImg}/>
    )
}