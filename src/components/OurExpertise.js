import React from "react"
import styled from "styled-components"
import BackLeft from "../images/oe1.png"
import BackRight from "../images/oe2.png"
import WebDevRed from "../images/svg/OurExpertise/webDevRed.svg"
import Cyber from "../images/svg/OurExpertise/cyber.svg"
import Ai from "../images/svg/OurExpertise/ai.svg"
import Mobile from "../images/svg/OurExpertise/mobile.svg"
import { Title } from "../components/micros/index"
import Fade from 'react-reveal/Fade';

const OurExpertise = () => {

    return (<Wrapper id="expertise" >
        <Title >Our Expertise</Title>
        <Fade right>
            <BgRight
                alt="backgoundImg"
                src={BackRight} />
        </Fade>
        <Fade left>
            <>
                <LeftText>
                    We are a team of programming enthusiasts. The goal of which is to create projects that will change the world around us
                    </LeftText>

                <BgLeft
                    alt="backgoundImg"
                    src={BackLeft} />
            </>
        </Fade>

        <Fade right>
            <IconsWraper>
                <ExpertiseIcon style={{
                    left: "65%",
                    top: "-100px"
                }}>
                    <RedIcon
                        src={WebDevRed} />
                    <Text>Web Dev</Text>
                </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "82%",
                    top: "-180px"
                }}>
                    <RedIcon
                        src={Cyber} />
                    <Text>Cybersecurity</Text>

                </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "65%",
                    top: "-180px"
                }}>
                    <RedIcon
                        src={Mobile} />
                    <Text>Mobile Dev</Text>
                </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "82%",
                    top: "-240px"
                }}>
                    <RedIcon
                        src={Ai} />
                    <Text>Artificial</Text>
                    <Text>Intelligence</Text>
                </ExpertiseIcon>

            </IconsWraper>
        </Fade>
    </Wrapper >)

}

const IconsWraper = styled.div`
/* position: relative; */
margin-top:-35%;
`

const Wrapper = styled.div`
    margin-top:20em;
    margin-bottom:5em;
`

const LeftText = styled.div`
    top:15em;
    width:35%;
    padding: 0px 40px;
    position:relative;
    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: 600;
    color:#fff;
   

    font-size: 1.5vw;

    @media (max-width: 949px) {
        top:16em;
    }
    @media (max-width: 700px) {
        top:17em;
    }


`


const BgLeft = styled.img`
    position: relative;
    width: 40%;
    z-index: -5;
    left:0px;
    /* top:3em; */
`
const BgRight = styled.img`
    position: relative;
    width: 40%;
    float:right;
    z-index: -5;
    top:-10em;
`

const RedIcon = styled.img`
margin:auto;
display:block;
width:5vw;
height:5vh;


`
const Text = styled.div`
    font-family: IBM Plex Mono;
    font-weight: 500;
    font-size: 1vw;
    text-align: center;    
   
    
    @media (max-width: 1324px) {
        font-size:12px;
    }

    @media (max-width: 830px) {
        font-size:10px;
    }

`

const ExpertiseIcon = styled.div`
display:flex;
flex-direction:column;
    position:relative;
    align-items: center;
    padding-bottom: 20px;
    width: 12vw;
    height: 15vh;
    background: #FFFFFF;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 45px;

    @media (max-width: 1324px) {
  
        border-radius: 20px;
        padding:20px;
        font-size:12px;
    }

    @media (max-width: 830px) {
    
        border-radius: 10px;
        padding:10px;
        font-size:10px;
    }

`


export default OurExpertise