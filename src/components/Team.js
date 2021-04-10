import React, { useState } from "react"
import styled from "styled-components"
import TeamBack from '../images/svg/ourteam.svg'
import "../style/slick.css";
import TeamSection from "./TeamSection"
import { useMediaQuery } from 'react-responsive';
import TeamMobile from './TeamMobile'


const TeamBackground = styled.div`
width: 100%; 
height: 100%;
margin: 0;
padding:0;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${TeamBack});
padding-top:2vw;
padding-bottom:14vw;

@media (max-width: 1900px) {
    padding-bottom:14vw;
}

@media (max-width: 1600px) {
    padding-bottom:14vw;
    }

@media (max-width: 1400px) {
    padding-bottom:13vw;
    }

@media (max-width: 1100px) {
    padding-bottom:12vw;
}

@media (max-width: 800px){
    padding-bottom:10vw;
}
`

const Title = styled.div`
    text-align:center;
    font-size:2rem;
    font-weight: 500;
    font-family: IBM Plex Mono;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size:40px;
    margin-bottom:3vh;

    @media (max-width: 1900px) {
        font-size:40px;
    }

    @media (max-width: 1600px) {
        font-size:35px;
        }

    @media (max-width: 1400px) {
        font-size:30px;
        }

    @media (max-width: 1100px) {
        font-size:30px;
    }

    @media (max-width: 800px){
        font-size:30px;
    }
`


export default () => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    if (isMobile == true) {
        return (
            <TeamMobile />
        );
    } else {
        return (
            <>
                <TeamBackground>
                    <Title id="team">
                        Meet Our Team
                    </Title>
                    <TeamSection />
                </TeamBackground>
            </>
        );
    }
}

