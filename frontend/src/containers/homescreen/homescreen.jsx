import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FrameOneImg } from '../../components/images/frame1';
import { FrameSecImg } from '../../components/images/frame2';
import { HistoImg } from '../../components/images/history';
import { IconsImg } from '../../components/images/icons';
import { LocationImg } from '../../components/images/location';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 115vh;
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
    box-shadow: 0 0 10px #888;
    background-color: white;
    flex-direction: row;
    justify-content: center;
    margin: 5vh 0 0 0;
    align-items: center;
    position: fixed;
    z-index: 0;
`;

const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 27vh;
    margin: 1vh 0 88vh 0;
`;

const SecondCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 18vh;
    margin: 1vh 0 2vh 0;
    border-radius: 15px 15px 15px 15px;
    background-color: white;
    box-shadow: 0 0 5px #888;
`;

const ThirdCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 18vh;
    margin: 0 0 6.5vh 0;
    border-radius: 15px 15px 15px 15px;
    background-color: white;
    box-shadow: 0 0 5px #888;
`;

const ActivityTitle = styled.div`
    display: flex;
    margin: 0 27vh 0.5vh 0;
    flex-direction: column;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 700;
`;


export function HomeScreen() {
    return (
        <div>
            <TopContainer>
                <HomeTitle>Home</HomeTitle>

                <LocationImg/>
            </TopContainer>

            <MainContainer>
            <MainCard>
            <Link to='/run' style={{ textDecoration: 'none' }}>
            <HistoImg/>
            </Link>
            </MainCard>

            <ActivityTitle>Activity</ActivityTitle>
            <SecondCard>
                <FrameOneImg/>
            </SecondCard>

            <ThirdCard>
                <FrameSecImg/>
            </ThirdCard>
            <BottomNav>
                <IconsImg/>
            </BottomNav>
            </MainContainer>
        </div>
    )
};