import React from 'react';
import styled from 'styled-components';
import frame1Img from '../../assets/images/back2.svg';

const FrameFirstImg = styled.img`
    display: flex;
    width: 90%;
    height: 80%;
`;

export function FrameOneImg () {
    return (
        <FrameFirstImg src={frame1Img}/>
    )
}