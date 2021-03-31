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
                    top: "10%;"
                }}>
                    <RedIcon
                        size={{
                            width: 104,
                            height: 86
                        }} src={WebDevRed} />
                            Web Dev
                    </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "80%",
                    top: "-30px"
                }}>
                    <RedIcon
                        size={{
                            width: 104,
                            height: 86
                        }} src={Cyber} />
                            Cybersecurity
                    </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "65%",
                    top: "-60px"
                }}>
                    <RedIcon
                        size={{
                            width: 104,
                            height: 86
                        }} src={Mobile} />
                            Mobile Dev
                    </ExpertiseIcon>
                <ExpertiseIcon style={{
                    left: "80%",
                    top: "-90px"
                }}>
                    <RedIcon
                        size={{
                            width: 104,
                            height: 86
                        }} src={Ai} />
                            Aritifical Intelligence
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
margin-bottom:10px;
margin:auto;
display:block;
width:5vw;
height:5vw;


`

const ExpertiseIcon = styled.div`
    position:relative;
    left:400px;
    padding:40px;

    width: 15vw;
    height: 12vw;
    background: #FFFFFF;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 45px;

    font-family: IBM Plex Mono;
    font-weight: 500;
    font-size: 1vw;
    line-height: 23px;
    text-align: center;    

    
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