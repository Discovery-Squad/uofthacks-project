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
    height: 68vh;
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RegisterTitle = styled.div`
    display: flex;
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
    margin: 15vh 0 3vh 0;
`;

const FirstName = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UserName = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 0 0;

`;

const Email = styled.div`
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
    margin: 2vh 0 0 0;
`;

const ConfirmPassword = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh 0 9vh 0;
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

const LoginLink = styled.div`
    display: flex;
    color: #FF9800;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
`;

export function SignUp() {
    return (
        <div>
            <MainContainer>
                <TopContainer>
                    <RegisterTitle>
                        Register
                    </RegisterTitle>

                    <FirstName>
                        <TextField
                        id="standard-multiline-flexible"
                        label="First name"
                        fullWidth
                        size="small"
                        multiline
                        maxRows={5}
                        variant="standard"
                        />
                    </FirstName>

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

                    <Email>
                        <TextField
                        id="standard-multiline-flexible"
                        fullWidth
                        label="Email"
                        size="small"
                        multiline
                        maxRows={5}
                        variant="standard"
                        />
                    </Email>

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

                    <ConfirmPassword>
                        <TextField
                        id="standard-multiline-flexible"
                        fullWidth
                        label="Confirm Password"
                        size="small"
                        multiline
                        maxRows={5}
                        variant="standard"
                        />
                    </ConfirmPassword>
                </TopContainer>

                <ButtonContainer>
                    <Button>
                        Create Account
                    </Button>
                </ButtonContainer>

                <OrText>
                    - OR -
                </OrText>

                <Link to='/Login' style={{ textDecoration: 'none' }}>
                    <LoginLink>
                        Log into existing account
                    </LoginLink>
                </Link>
            </MainContainer>
        </div>
    )
};