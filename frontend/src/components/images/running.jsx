import React from 'react';
import styled from 'styled-components';
import runImg from '../../assets/images/undraw_jogging_re_k28i_1.svg';

const RunningContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RImg = styled.img`
    width: 240px;
    height: 177px;
`;

export function RunningImg () {
    return (
        <RunningContainer>
            <RImg src ={runImg}/>
        </RunningContainer>
    )
}