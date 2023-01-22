import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/logo.svg';

const FrameLogoImgNew = styled.img`
    display: flex;
    width: 100%;
`;

export function FrameLogoImg () {
    return (
        <FrameLogoImgNew src={logoImg}/>
    )
}