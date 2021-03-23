import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LinkedinIcon from "../images/linkedin.png"
import Flip from 'react-reveal/Flip';


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
    margin-right:2vw;
    margin-left:2vw;
    margin-bottom:1vw;
`

const PersonName=styled.h4`
    text-align:center;
    font-size:1.8vw;
    margin:0;
    font-family: IBM Plex Mono;
`

const Title = styled.h5`
    margin-top:10px;
    color: #C03535;
    text-align:center;
    font-size:1.2vw;
    font-family: IBM Plex Mono;
`

const Linkedin=styled.img`
    height:20px;
`

const LinkedinBack=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const AnimationDiv = styled.div`
    -webkit-transition: 0.3s ease-in-out, -webkit-transform: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out, -moz-transform 0.3s ease-in-out;
    transition: 0.3s ease-in-out, transform 0.3s ease-in-out;

    :hover
    {
        transform:scale(1.05);
    }

`

function PersonCard(props){
    return(
        <AnimationDiv>
        <Flip left cascade>
            <CardBackground>
                <PersonPhoto src={props.photo} />
                <PersonName>
                    {props.name}
                </PersonName>
                <PersonName>
                    {props.surname}
                </PersonName>
                <Title>
                    {props.role}
                </Title>
                <LinkedinBack>
                    <Linkedin src={LinkedinIcon} onClick={() => window.open(props.url, '_blank')}/>
                </LinkedinBack>
            </CardBackground>
        </Flip>
        </AnimationDiv>
    );
}

export default PersonCard;

