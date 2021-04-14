import React, { useState } from "react"
import styled from "styled-components"
import TeamSection from "../components/TeamSection"


export default () => {

    return (
        <Content>
            {/* <BackImg src={TeamBack} /> */}
            <TeamBackground>
                <HeaderTitleBack id="team">
                    <HeaderTitleWhite>
                        Meet Our Team
                    </HeaderTitleWhite>
                </HeaderTitleBack>
                <TeamBox>
                    <TeamSection />
                </TeamBox>
            </TeamBackground>
        </Content>
    );
}
const TeamBox = styled.div`
    padding-top:30px;
    padding-bottom:300px;
`

const Content = styled.div`
  position: relative;
`

const BackImg = styled.img`
margin-top:367px;
max-width:100%;
object-fit: cover;
height:auto;
position: absolute;
z-index:0;
`


const TeamBackground = styled.div`
width: 100%; 
height: auto;
position: absolute;
z-index:1;
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
position:absolute;
    left:0;
    right:0;
`
const HeaderTitleBack = styled.div`
padding-top:350px;
align-self:center;
flex:1;
font-family: IBM Plex Mono;
justify-content: "center";

`
