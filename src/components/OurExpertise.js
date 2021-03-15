import React from "react"
import styled from "styled-components"
import BackLeft from "../images/oe1.png"
import BackRight from "../images/oe2.png"
import WebDevRed from "../images/svg/OurExpertise/WebDevRed.svg"
import { Title } from "../components/micros/index"


const OurExpertise = () => {

    return (<Wrapper>
        <Title>Our Expertise</Title>
        <BgRight
            alt="backgoundImg"
            src={BackRight} />
        <LeftText>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
            
            </LeftText>
        <BgLeft
            alt="backgoundImg"
            src={BackLeft} />

        <IconsWraper>
            <ExpertiseIcon style={{
                left:"65%",
                top:"10%;"
            }}>
                    <RedIcon
                    style={{
                        width:"104px",
                        height:"86px"
                    }} src={WebDevRed} />
                    Web Dev
            </ExpertiseIcon>
            <ExpertiseIcon style={{
                left:"80%",
                top:"-30px"
            }}>
                    <RedIcon
                    style={{
                        width:"104px",
                        height:"86px"
                    }} src={WebDevRed} />
                    Web Dev
            </ExpertiseIcon>
            <ExpertiseIcon style={{
                left:"65%",
                top:"-60px"
            }}>
                    <RedIcon
                    style={{
                        width:"104px",
                        height:"86px"
                    }} src={WebDevRed} />
                    Web Dev
            </ExpertiseIcon>
            <ExpertiseIcon style={{
                left:"80%",
                top:"-90px"
            }}>
                    <RedIcon
                    style={{
                        width:"104px",
                        height:"86px"
                    }} src={WebDevRed} />
                    Web Dev
            </ExpertiseIcon>
        
        </IconsWraper>

    

    </Wrapper>)

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
    top:10em;

    position:relative;
    font-family: IBM Plex Mono;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 47px;
    color:#fff;

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
`

const ExpertiseIcon = styled.div`
    position:relative;
    left:400px;
    padding:40px;

    width: 177px;
    height: 179px;
    background: #FFFFFF;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 45px;

    font-family: IBM Plex Mono;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;    
`


export default OurExpertise