import React from 'react';
import styled from 'styled-components';
import runImg from '../../assets/images/runImage.svg';

const RunFrameImg = styled.img`
    display: flex;
    width: 100%;
`;

export function HistoRunImg () {
    return (
        <RunFrameImg src={runImg}/>
    )
}