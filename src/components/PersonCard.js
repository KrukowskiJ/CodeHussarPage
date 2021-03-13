import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Photo from "../images/photo.png"
import LinkedinIcon from "../images/li.png"

const CardBackground=styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 45px;
    padding:2vw;
    margin:4vw;
`

const PersonPhoto=styled.img`

`

const PersonName=styled.h4`
    text-align:center;
`

const Title = styled.h5`
    color: #C03535;
    text-align:center;
`

const Linkedin=styled.img`

`

function PersonCard(){
    return(
        <CardBackground>
            <PersonPhoto src={Photo} />
            <PersonName>
                Jan Nowak
            </PersonName>
            <Title>
                Mentor
            </Title>
            <Linkedin src={LinkedinIcon}>
            </Linkedin>
        </CardBackground>
    );
}

export default PersonCard;

