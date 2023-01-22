import React from 'react';
import styled from 'styled-components';
import { FrameLogoImg } from '../../components/images/logo';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FF9800;
    height: 100vh;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 25vh 0;
`;

export function Splash() {
    return (
        <div>
            <MainContainer>
                <LogoContainer>
                    <FrameLogoImg/>
                </LogoContainer>
            </MainContainer>
        </div>
    )
};