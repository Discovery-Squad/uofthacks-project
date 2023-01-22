import React from 'react';
import styled from 'styled-components';
import { GoImg } from '../../components/images/go';
import { HistoRunImg } from '../../components/images/run';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
`;

const RunImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    align-items: center;
    width: 100%;
`;

const RunInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    background-color: black;
`;

const RunTopText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const RouteText = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    margin: 0 75vw 40vh 0;
`;

const IntTextOne = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    margin: 24vh 0 0 4vw;
`;

const IntTextTwo = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    margin: 28vh 0 0 4vw;
`;

const IntTextThree = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    margin: 32vh 0 0 4vw;
`;

const IntTextFour = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    margin: 36vh 0 0 4vw;
`;

const IntTextFive = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    margin: 40vh 0 0 4vw;
`;

const IntText = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    margin: 20vh 0 0 4vw;
`;

const KMText = styled.div`
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    position: absolute;
    margin: 0vh 0 39vh 69vw;
`;

const GoButton = styled.div`
    display:flex;
    position: absolute;
    margin: 37vh 0 0 65vw;
`;

export function ThemedRun() {
    
    return (

        <div>
            <MainContainer>
                <RunImageContainer>
                    <HistoRunImg/>
                </RunImageContainer>
            </MainContainer>
            <RunInfoContainer>
                <RunTopText>
                    <RouteText>
                        Route
                    </RouteText>
                    <KMText>
                        4.1 km total
                    </KMText>
                </RunTopText>

                <IntText>Points of interest</IntText>
                <IntTextOne>1. Something</IntTextOne>
                <IntTextTwo>2. Somewhere</IntTextTwo>
                <IntTextThree>3. Somehow</IntTextThree>
                <IntTextFour>4. Scrumbus</IntTextFour>
                <IntTextFive>5. Scronga</IntTextFive>

                <GoButton>
                    <Link to='/runningmode' style={{ textDecoration: 'none' }}>
                        <GoImg/>
                    </Link>
                </GoButton>

            </RunInfoContainer>
        </div>
    )
};