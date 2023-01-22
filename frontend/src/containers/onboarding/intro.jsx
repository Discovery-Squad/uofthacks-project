import React from 'react';
import styled from 'styled-components';
import { RunningImg } from '../../components/images/running';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 0 0;
`;

const IntroTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
    margin: 0 0 4vh 0;
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IntroText = styled.div`
    width: 65%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 5vh 0 4vh 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Button = styled.button`
    background-color: #FF9800;
    border: none;
    color: white;
    width: 170px;
    height: 42px;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;

export function Intro() {
    return (
        <div>
            <MainContainer>
                <TopContainer>
                    <IntroTitle>
                        Welcome!
                    </IntroTitle>
                
                    <RunningImg/>
                </TopContainer>

                <BottomContainer>
                    <IntroText>
                        <p>Welcome to Wander, where <b style={{color: "#FF9800"}}>exploration</b> and <b style={{color: "#FF9800"}}>exercise</b> become one.</p>
                    </IntroText>
                    
                    <ButtonContainer>
                        <Button>
                            Get Started
                        </Button>
                    </ButtonContainer>
                </BottomContainer>
            </MainContainer>
        </div>
    )
};