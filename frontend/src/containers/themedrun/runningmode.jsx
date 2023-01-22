import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FrameGpsImg } from '../../components/images/gps';

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45.5vh;
    width: 100%;
    background-color: black;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin: 0 0 10vh 0;
    width: 100%;
    background:linear-gradient(#000000,transparent);
    background-color:orange
`;

const TopText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Prog = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    margin: 0 35vw 33vh 0;
`;

const Gps = styled.div`
    display: flex;
    position: absolute;
    margin: 0 0 33vh 64vw;
`;


export function RunMode() {
    return (
        <div>
            <TopContainer>
            <TopText>
            <Prog>Run in progress...</Prog>
            <Gps>
            <FrameGpsImg/>
            </Gps>
            </TopText>
            </TopContainer>
            <MainContainer>

            </MainContainer>
        </div>
    )
};