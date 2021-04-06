import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TeamBack from '../images/svg/ourteam.svg'
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import PersonCard from '../components/PersonCard'
import ProjectCard from '../components/micros/ProjectCard.js'

import Pulse from '../images/projects/pulse.jpg'
import ReadyDonate from '../images/projects/readydonate.png'
import Uninetwork from '../images/projects/uniconnect.png'
import EduMatch from '../images/projects/edumatch.jpg'
import HealthPoint from '../images/projects/healthpoint.jpg'
import InTouch from '../images/projects/intouch.png'
import Teddy from '../images/projects/teddy.jpg'
import Vuer from '../images/projects/vuer.jpg'

import Photo from "../images/photo.png"
import "../style/slick.css";
import Cup1 from '../images/awards/firstcup.png'
import Cup2 from '../images/awards/secondcup.png'
import MultiCup from '../images/awards/firstcuphp.png'
import SpecialAward from '../images/awards/specialaward.png'
import Top5 from '../images/awards/top5.png'
import PrevArrowImg from "../images/prevarrow.png"
import NextArrowImg from "../images/nextarrow.png"
import Fade from 'react-reveal/Fade'
import Carusel from "../components/Carusel"
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
padding-bottom:8vw;
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


export default () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    if(isMobile==true){
        return (
            <TeamMobile />
        );
    }else{
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
}

