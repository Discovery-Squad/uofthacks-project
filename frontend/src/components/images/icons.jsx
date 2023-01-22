import React from 'react';
import styled from 'styled-components';
import homImg from '../../assets/images/home.svg';
import mpImg from '../../assets/images/map.svg';
import profImg from '../../assets/images/profile.svg';
import pfImg from '../../assets/images/pref.svg';
import { Link } from 'react-router-dom';

const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HomeImg = styled.img`
    display: flex;
    width: 58.11px;
    height: 58.11px;
    margin: 0 7vw 0 0;
`;

const MapImg = styled.img`
    display: flex;
    width: 58.11px;
    height: 58.11px;
    margin: 0 7vw 0 0;
`;

const PrefImg = styled.img`
    display: flex;
    width: 58.11px;
    height: 58.11px;
    margin: 0 0 0 7vw;
`;

const ProfileImg = styled.img`
    display: flex;
    width: 58.11px;
    height: 58.11px;
`;

export function IconsImg () {
    return (
        <IconsContainer>

            <Link to='/home' style={{ textDecoration: 'none' }}><HomeImg src={homImg} /></Link>
            <Link to='/explore' style={{ textDecoration: 'none' }}><MapImg src={mpImg} /></Link>
            <Link to='/myprofile' style={{ textDecoration: 'none' }}><ProfileImg src={profImg} /></Link>
            <Link to='/preferences' style={{ textDecoration: 'none' }}><PrefImg src={pfImg} /></Link>
        </IconsContainer>
    )
}