import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
    margin: 11vh 0 3vh 0;
`;

const UserName = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 0 0;

`;

const Password = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 28vh 0;
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

const OrText = styled.div`
    display: flex;
    color: lightgray;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    margin: 1.3vh 0 1.3vh 0;
`;

const SignUpLink = styled.div`
    display: flex;
    color: #FF9800;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
`;

export function Login() {
    return (
        <div>
            <MainContainer>
                <TopContainer>
                    <LoginTitle>
                        Log in
                    </LoginTitle>

                    <UserName>
                        <TextField
                        id="standard-multiline-flexible"
                        label="Username"
                        fullWidth
                        size="small"
                        multiline
                        maxRows={5}
                        variant="standard"
                        />
                    </UserName>

                    <Password>
                        <TextField
                        id="standard-multiline-flexible"
                        fullWidth
                        label="Password"
                        size="small"
                        multiline
                        maxRows={5}
                        variant="standard"
                        />
                    </Password>
                </TopContainer>

                <ButtonContainer>
                    <Button>
                        Submit
                    </Button>
                </ButtonContainer>

                <OrText>
                    - OR -
                </OrText>

                <Link to='/SignUp' style={{ textDecoration: 'none' }}>
                    <SignUpLink>
                        Create a new account
                    </SignUpLink>
                </Link>
            </MainContainer>
        </div>
    )
};