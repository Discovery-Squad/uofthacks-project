import React from 'react';
import styled from 'styled-components';
import { LocationImg } from '../../components/images/location';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3vh 0 0 0;
`;

const HomeTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
`;

const BottomNav = styled.div`
    
`;

export function HomeScreen() {
    return (
        <div>
            <TopContainer>
                <HomeTitle>Home</HomeTitle>

                <LocationImg/>
            </TopContainer>
            
        </div>
    )
};