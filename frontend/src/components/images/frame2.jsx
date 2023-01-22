import React from 'react';
import styled from 'styled-components';
import frame2Img from '../../assets/images/back1.svg';

const FrameSecondImg = styled.img`
    display: flex;
    width: 92%;
    height: 100%;
`;

export function FrameSecImg () {
    return (
        <FrameSecondImg src={frame2Img}/>
    )
}