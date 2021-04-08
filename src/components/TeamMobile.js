import React, { useState } from "react"
import styled from "styled-components"
import TeamBack from '../images/svg/ourteamMobile.svg'
import TeamSection from "../components/TeamSection"


export default () => {

    const TeamBackground = styled.div`
    width: 100%; 
    height: 100%;
    margin: 0;
    padding:0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${TeamBack});
    padding-top:10vw;
    padding-bottom:60vw;
`

    const HeaderTitleWhite = styled.h1`
    text-align:center;
    font-size:2rem;
    font-weight: 500;
    font-family: IBM Plex Mono;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size:15px;
    margin-bottom:3vh;
`
    const HeaderTitleBack = styled.div`
    align-self:center;
    flex:1;
    font-family: IBM Plex Mono;
    justify-content: "center";
`

    return (
        <>
            <TeamBackground>
                <HeaderTitleBack id="team">
                    <HeaderTitleWhite>
                        Meet Our Team
                    </HeaderTitleWhite>
                </HeaderTitleBack>
                <TeamSection />
            </TeamBackground>
        </>
    );
}

const TeamBackground = styled.div`
width: 100%; 
height: 100%;
margin: 0;
padding:0;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${TeamBack});
padding-top:10vw;
padding-bottom:30vw;
`

const HeaderTitleWhite = styled.h1`
text-align:center;
color:white;
padding-bottom:2vw;
font-family: IBM Plex Mono;
font-size:3vw;
`
const HeaderTitleBack = styled.div`
align-self:center;
flex:1;
font-family: IBM Plex Mono;
justify-content: "center";
`

