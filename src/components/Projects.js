
import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TeamBack from '../images/svg/ourprojects2.svg'
import TeamBackMobile from '../images/svg/ourprojects2.svg'
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
import Flip from 'react-reveal/Flip';
import { useMediaQuery } from 'react-responsive';
import ProjectsMobile from './ProjectsMobile'
import { Title } from "../components/micros/index"
const projectNameList = ["Health Point", "Vuer", "Teddy", "Pulse", "EduMatch", "Ready?Donate!", "InTouch", "UniNetwork"];
const projectPictureList = [HealthPoint, Vuer, Teddy, Pulse, EduMatch, ReadyDonate, InTouch, Uninetwork];
const projectDescList = [
    "The project under the name Health Point meets the needs of medical services providing assistance to victims of accidents, disasters or even terrorist attacks. Our application displays holograms informing about the basic life parameters of the victim. The goal of the project is to improve the effectiveness of first aid.",
    "The Vuer project, which supports and helps blind and deaf people. The application automates audio description processes using WiFi networks. The system allows the use of QR codes for quick and ergonomic connection to WiFi networks, and then launching the functionality of smartphones - the text-to-speech module.",
    "The growing number of neurological problems forces modern society to involve new technology in the care of these diseases. The Teddy project is based on sensory data collected from a biomedical band to detect anxiety and respond accordingly",
    "The Pulse project was presented during the Katowice hackathon. It is a response to the growing demand for the involvement of new technologies in the treatment process. The application monitors the patient's condition by recording life parameters and specialized surveys. Then these data are correlated so that the doctor can tailor the medication to the patient",
    "The EduMatch project aims to associate and focus environments of engineers and enthusiasts of various technologies studying at any universities. It is a great way to find people willing to participate in innovative projects implemented by scientific clubs, start-ups and it is mainly for these entities that the application is addressed",
    "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space",
    "Oncological diagnosis can be a drastic experience. Therefore, an interactive chatbot has been prepared for the Rak'n Roll Foundation to support people fighting cancer.",
    "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world"
]
const projectAwardList = [
    "Microsoft Imagine Hack",
    "Hackathon + 2018",
    "nMedycyna 2018",
    "HackOne 2019",
    "Best Hacking League 2019",
    "Hacking Carrots",
    "HackYeah 2020",
    "eduHack 2021"
]

const projectAwardIcon = [
    MultiCup,
    Cup2,
    Cup1,
    Cup1,
    Cup1,
    SpecialAward,
    Top5,
    Cup1
]

const ProjectBackground = styled.div`
width: 100%; 
height: auto;
margin:0;
margin-top: 5vw;
padding:0;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${TeamBack});
padding-top:5vw;
padding-bottom:6vw;

@media (max-width: 1900px) {
    padding-bottom:6vw;
}

@media (max-width: 1600px) {
    padding-bottom:5.8vw;
    }

@media (max-width: 1400px) {
    padding-bottom:6vw;
    }

@media (max-width: 1200px) {
    padding-bottom:6.0vw;
}

@media (max-width: 800px){
    padding-bottom:6vw;
}

`

const HeaderTitle = styled.h1`
text-align:center;
color:black;
padding-bottom:2vw;
font-family: IBM Plex Mono;
font-size:3vw;
`
const HeaderTitleWhite = styled.h1`
text-align:center;
color:white;
padding-bottom:2vw;
font-family: IBM Plex Mono;
font-size:3vw;
`
const HeaderTitleBack = styled.div`
flex:1;
font-family: IBM Plex Mono;
justify-content: "center";
`

const ProjectTitle = styled.h1`
color:white;
text-align:center;
font-family: IBM Plex Mono;
font-size: 2.4em;

@media (max-width: 1900px) {
    font-size: 2.0em;
}

@media (max-width: 1600px) {
    font-size: 1.8em;
}

@media (max-width: 1400px) {
        font-size: 1.4em;
    }

@media (max-width: 1100px) {
    font-size: 1.2em;
}

@media (max-width: 800px){
    font-size: 1.0em;   
}

`

const ProjectDescription = styled.h5`
text-align:center;
color:white;
font-family: IBM Plex Mono;
height:10vw;
font-size: 2em;

@media (max-width: 1900px) {
    font-size: 1.8em;
}

@media (max-width: 1600px) {
        font-size: 1.6em;
    }

@media (max-width: 1400px) {
        font-size: 1.4em;
    }

@media (max-width: 1100px) {
    font-size: 1.0em;
}

@media (max-width: 800px){
    font-size: 1em;   
}
/* font-size:1.7vw; */
`

const Project = styled.div`

`

const Award = styled.img`
padding:3.5vw;
padding-bottom:0px;
background-repeat: no-repeat;
background-size: contain;
background-position:center;
margin-left: auto;
margin-right: auto;
width:100%;
height:100%;
padding-top:0;

@media (max-width: 1900px) {
    padding-top:0;
}

@media (max-width: 1900px) {
    padding-top:0;
}

@media (max-width: 1600px) {
    padding-top:0;
    }

@media (max-width: 1400px) {
    padding-top:0;
    }

@media (max-width: 1100px) {
    padding-top:5%;
}

@media (max-width: 800px){
    padding-top:0;
}
`
const TitleBar = styled.div`
margin-top:2vw;
margin-bottom:1vw;
align-self:center;
flex:1;
justify-content: "center";
`
const AwardName = styled.h6`
margin-top:1vw;
color:white;
text-align:center;
font-family: IBM Plex Mono;
font-size: 1.8em;

@media (max-width: 1900px) {
    font-size: 1.6em;
}

@media (max-width: 1600px) {
        font-size: 1.4em;
    }

@media (max-width: 1400px) {
        font-size: 1.2em;
    }

@media (max-width: 1100px) {
    font-size: 0.8em;
}

@media (max-width: 800px){
    font-size: 0.8em;   
}

`

const AwardField = styled.div`
margin-top:1vw;
padding:2vw;
max-height:10vw;
`

const CenterAwardName = styled.div`
align-self:center;
flex:1;
justify-content: "center";
`

const ArrowBox = styled.img`
margin:0px;
`


const EmptySpace = styled.div`
height:5vw; 
`


const ProjectDescriptionCard = styled.div`
height:10vw;
`



export default () => {

    const [projectName, setProjectName] = useState(projectNameList[0]);
    const [projectDesc, setProjectDesc] = useState(projectDescList[0]);
    const [projectAward, setProjectAward] = useState(projectAwardList[0]);
    const [projectAwardCup, setProjectAwardCup] = useState(projectAwardIcon[0]);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const setProjectInfo = (prjNumber) => {
        console.log(prjNumber);
        setProjectName(projectNameList[prjNumber]);
        setProjectDesc(projectDescList[prjNumber]);
        setProjectAward(projectAwardList[prjNumber]);
        setProjectAwardCup(projectAwardIcon[prjNumber]);
    }

    if (isMobile == true) {
        return (
            <ProjectsMobile />
        );
    } else {
        return (
            <>
                <HeaderTitleBack id="projects">
                    <Title>
                        Our Projects
                    </Title>
                </HeaderTitleBack>

                <div>
                    <Carusel setState={(p) => { setProjectInfo(p) }} />
                </div>


                <ProjectBackground>
                    <Container fluid>
                        <Row>
                            <Col md="1">

                            </Col>
                            <Col md="7">
                                <Row>
                                    <TitleBar>
                                        <ProjectTitle>
                                            {projectName}
                                        </ProjectTitle>
                                    </TitleBar>
                                </Row>
                                <Row>
                                    <ProjectDescriptionCard>
                                        <ProjectDescription>
                                            {projectDesc}
                                        </ProjectDescription>
                                    </ProjectDescriptionCard>
                                </Row>
                            </Col>
                            <Col md="2">
                                <AwardField>
                                    <Row>
                                        <CenterAwardName>
                                            <Award src={projectAwardCup} />
                                        </CenterAwardName>
                                    </Row>
                                    <Row>
                                        <CenterAwardName>
                                            <AwardName>
                                                {projectAward}
                                            </AwardName>
                                        </CenterAwardName>
                                    </Row>
                                </AwardField>
                            </Col>
                        </Row>
                    </Container>
                </ProjectBackground>
            </>
        );
    }
}