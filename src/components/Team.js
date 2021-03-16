import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TeamBack from '../images/svg/teambackground.svg'
import Slider from "react-slick";
import Pulse from '../images/projects/pulse.png'
import ReadyDonate from '../images/projects/readydonate.png'
import Uninetwork from '../images/projects/uniconnect.png'
import { Container, Row, Col } from "react-bootstrap";
import Cup from '../images/svg/cup.svg'
import PersonCard from '../components/PersonCard'
import ProjectCard from '../components/micros/ProjectCard.js'
import Prj4 from '../images/projects/pulse.png'
import Prj5 from '../images/projects/pulse.png'
import Prj6 from '../images/projects/pulse.png'

var projectNameList = ["Pulse", "Uninetwork", "ReadyDonate"];
var projectDescList = [
    "The Pulse project was presented during the Katowice hackathon. It is a response to the growing demand for the involvement of new technologies in the treatment process. The application monitors the patient's condition by recording life parameters and specialized surveys. Then these data are correlated so that the doctor can tailor the medication to the patient",
    "UniConnect is an innovative application supporting scientific circles during an epidemic. It allows the creation of multidisciplinary teams of scientists from around the world.",
    "An application supporting local communities to raise funds for small initiatives. The project allows for the implementation of small ideas in urban space"
]
var projectAwardList = [
    "HackOne 2019",
    "eduHack 2020",
    "Hacking Carrots 2019"
]

const TeamBackground = styled.div`
    width: 100%; 
    height: 100%;
    margin: 0;
    padding:0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${TeamBack});
    padding-top:13vw;
    padding-bottom:35vw;
`

const HeaderTitle = styled.h1`
    text-align:center;
    color:white;
`

const HeaderTitleBack = styled.div`
    align-self:center;
    flex:1;
    justify-content: "center";
`

const ProjectTitle = styled.h1`
    color:white;
    text-align:center;
    font-size:3vw;
`

const ProjectDescription = styled.h5`
    text-align:center;
    color:white;
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
    align-self:center;
    flex:1;
    justify-content: "center";
`
const AwardName = styled.h6`
    margin-top:1vw;
    color:white;
    text-align:center;
    font-size:1.5vw;
`

const AwardField = styled.div`
    padding:2vw;
`

const CenterAwardName = styled.div`
    align-self:center;
    flex:1;
    justify-content: "center";
`


const Team = () => {


    const [projectName, setProjectName] = useState(projectNameList[0]);
    const [projectDesc, setProjectDesc] = useState(projectDescList[0]);
    const [projectAward, setProjectAward] = useState(projectAwardList[0]);

    const setProjectInfo = (prjNumber) => {
        console.log(projectDescList[2]);
        if (prjNumber == "1") {
            setProjectName(projectNameList[0]);
            setProjectDesc(projectDescList[0]);
            setProjectAward(projectAwardList[0])
        } else if (prjNumber == "2") {
            setProjectName(projectNameList[1]);
            setProjectDesc(projectDescList[1]);
            setProjectAward(projectAwardList[1])
        } else if (prjNumber == "3") {
            setProjectName(projectNameList[2]);
            setProjectDesc(projectDescList[2]);
            setProjectAward(projectAwardList[2])
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    const CaruselBack = styled.div`
        margin: 30px;
    `

    const EmptySpace = styled.div`
        height:5vw; 
    `

    const Persons = styled.div`
          display:flex;
          align-items:center;
          justify-content:center;
      `

    return (
        <>
            <HeaderTitleBack>
                <HeaderTitle>
                    Our Projects
                </HeaderTitle>
            </HeaderTitleBack>

            <CaruselBack>
                <Slider {...settings}>

                    <div onClick={() => { setProjectInfo("1") }}>
                        <ProjectCard img={Pulse} />
                    </div>

                    <div onClick={() => { setProjectInfo("2") }}>
                        <ProjectCard img={ReadyDonate} />
                    </div>

                    <div onClick={() => { setProjectInfo("3") }}>
                        <ProjectCard img={Uninetwork} />
                    </div>

                    <div onClick={() => { setProjectInfo("1") }}>
                        <ProjectCard img={Prj4} />
                    </div>

                    <div onClick={() => { setProjectInfo("2") }}>
                        <ProjectCard img={Prj5} />
                    </div>

                    <div onClick={() => { setProjectInfo("3") }}>
                        <ProjectCard img={Prj6} />
                    </div>

                </Slider>
            </CaruselBack>

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
                                <ProjectDescription>
                                    {projectDesc}
                                </ProjectDescription>
                            </Row>
                        </Col>
                        <Col md="2">
                            <AwardField>
                                <Row>
                                    <CenterAwardName>
                                        <Award src={Cup} />
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

                <HeaderTitleBack>
                    <HeaderTitle>
                        Meet Our Team
                    </HeaderTitle>
                </HeaderTitleBack>
                <Persons>
                    <Row>
                        <PersonCard />
                        <PersonCard />
                        <PersonCard />
                    </Row>
                </Persons>
                <Persons>
                    <Row>
                        <PersonCard />
                        <PersonCard />
                        <PersonCard />
                    </Row>
                </Persons>



            </TeamBackground>


        </>
    );
}

export default Team;

