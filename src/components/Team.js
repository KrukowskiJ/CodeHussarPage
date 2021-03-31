import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TeamBack from '../images/svg/teambackground.svg'
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
import "./slick.css";
import Cup1 from '../images/awards/firstcup.png'
import Cup2 from '../images/awards/secondcup.png'
import MultiCup from '../images/awards/firstcuphp.png'
import SpecialAward from '../images/awards/specialaward.png'
import Top5 from '../images/awards/top5.png'
import PrevArrowImg from "../images/prevarrow.png"
import NextArrowImg from "../images/nextarrow.png"
import Fade from 'react-reveal/Fade';

import Patryk from "../images/persons/patryk.png";
import Sebastian from "../images/persons/sebastian.png";
import Piotrek from "../images/persons/piotr.png";
import Aga from "../images/persons/aga.png";
import Kuba from "../images/persons/kuba.png";
import Carusel from "../components/Carusel"





export default () => {
    const projectNameList = ["Health Point", "Vuer", "Teddy", "Pulse", "EduMatch", "Ready?Donate!", "InTouch", "UniNetwork"];
    const projectPictureList = [HealthPoint, Vuer, Teddy, Pulse, EduMatch, ReadyDonate, InTouch, Uninetwork];
    const projectDescList = [
        "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world.",
        "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space",
        "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world.",
        "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space",
        "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world.",
        "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space",
        "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world.",
        "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space"
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
    const [projectName, setProjectName] = useState(projectNameList[0]);
    const [projectDesc, setProjectDesc] = useState(projectDescList[0]);
    const [projectAward, setProjectAward] = useState(projectAwardList[0]);
    const [projectAwardCup, setProjectAwardCup] = useState(projectAwardIcon[0]);
    const TeamBackground = styled.div`
    width: 100%; 
    height: 100%;
    margin: 0;
    padding:0;
    background-repeat: no-repeat;
    background-size: contain;
    background-image:url(${TeamBack});
    padding-top:13vw;
    padding-bottom:30vw;
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
    align-self:center;
    flex:1;
    font-family: IBM Plex Mono;
    justify-content: "center";
`

    const ProjectTitle = styled.h1`
    color:white;
    text-align:center;
    font-family: IBM Plex Mono;
    font-size:3vw;
`

    const ProjectDescription = styled.h5`
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size:1.7vw;
`

    const Project = styled.div`

`

    const Award = styled.img`
    padding:3.5vw;
    padding-bottom:0px;
    padding-top:2vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin-left: auto;
    margin-right: auto;
    width:100%;
    height:100%;
`
    const TitleBar = styled.div`
    margin-top:2vw;
    align-self:center;
    flex:1;
    justify-content: "center";
`
    const AwardName = styled.h6`
    margin-top:1vw;
    color:white;
    text-align:center;
    font-family: IBM Plex Mono;
    font-size:1.5vw;
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



    const setProjectInfo = (prjNumber) => {
        console.log(prjNumber);
        setProjectName(projectNameList[prjNumber]);
        setProjectDesc(projectDescList[prjNumber]);
        setProjectAward(projectAwardList[prjNumber]);
        setProjectAwardCup(projectAwardIcon[prjNumber]);
    }


    const EmptySpace = styled.div`
    height:5vw; 
`

    const Persons = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
  `

    const ProjectDescriptionCard = styled.div`
    height:10vw;
`

    return (
        <>
            <HeaderTitleBack id="projects">
                <HeaderTitle>
                    Our Projects
                </HeaderTitle>
            </HeaderTitleBack>
            <div>
                <Carusel setState={(p) => { setProjectInfo(p) }} />
            </div>


            <TeamBackground>
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

                <EmptySpace />

                <HeaderTitleBack id="team">
                    <HeaderTitleWhite>
                        Meet Our Team
                    </HeaderTitleWhite>
                </HeaderTitleBack>
                <Persons>
                    <Row>
                        <PersonCard name="Patryk" surname="Ostrowski" role="Software Engineer" photo={Patryk} url="https://www.linkedin.com/in/patryk-ostrowski/" />
                        <PersonCard name="Sebastian" surname="Szczepański" role="CMO " photo={Sebastian} url="https://www.linkedin.com/in/sebastian-piotr-szczepanski/" />
                        <PersonCard name="Piotr" surname="Filochowski" role="Software Engineer" photo={Piotrek} url="https://www.linkedin.com/in/piotr-filochowski/" />
                    </Row>
                </Persons>
                <Persons>
                    <Row>
                        <PersonCard name="Jakub" surname="Krukowski" role="Frontend Developer" photo={Kuba} url="https://www.linkedin.com/in/jakub-krukowski-b4a066187/" />
                        <PersonCard name="Agnieszka" surname="Pawełek" role="UX Designer" photo={Aga} />
                    </Row>
                </Persons>



            </TeamBackground>


        </>
    );
}

