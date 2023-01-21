import React from 'react';
import styled from 'styled-components';
import '../../../src/App.css';

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IntroTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: bold;
`;

export function Intro() {
    return (
        <div>
            <MainContainer>
                <IntroTitle>
                    <h1>Welcome!</h1>
                </IntroTitle>
            </MainContainer>
        </div>
    )
};