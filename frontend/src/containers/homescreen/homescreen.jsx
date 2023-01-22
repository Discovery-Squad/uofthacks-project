import React from 'react';
import styled from 'styled-components';
import { IconsImg } from '../../components/images/icons';
import { LocationImg } from '../../components/images/location';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HomeTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
`;

const BottomNav = styled.div`
    display: flex;
    width: 100%;
    height: 11vh;
    box-shadow: 0 0 15px #888;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: 28vh 0 0 0;
`;



export function HomeScreen() {
    return (
        <div>
            <TopContainer>
                <HomeTitle>Home</HomeTitle>

                <LocationImg/>
            </TopContainer>

            <MainContainer>
            <BottomNav>
                <IconsImg/>
            </BottomNav>
            </MainContainer>
        </div>
    )
};