import React from 'react';
import styled from 'styled-components';
import runImg from '../../assets/images/runImageNew.svg';

const RunFrameImg = styled.img`
    display: flex;
    width: 100%;
`;

const MapFrameImg = styled.img`
    display: flex;
    width: 100%;
`;

export function HistoRunImg () {
    return (
        <div>
        <RunFrameImg src={runImg}/>
        </div>
    )
}