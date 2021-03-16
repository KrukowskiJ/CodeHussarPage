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
    margin-bottom:0vw;
`

const PersonPhoto=styled.img`
    height:10vw;
`

const PersonName=styled.h4`
    text-align:center;
    font-size:2vw;
`

const Title = styled.h5`
    color: #C03535;
    text-align:center;
    font-size:2vw;
`

const Linkedin=styled.img`
`

const LinkedinBack=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
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
            <LinkedinBack>
                <Linkedin src={LinkedinIcon}/>
            </LinkedinBack>
        </CardBackground>
    );
}

export default PersonCard;

