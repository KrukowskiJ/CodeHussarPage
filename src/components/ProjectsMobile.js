import React, { useState } from "react"
import styled from "styled-components"
import TeamBackMobile from '../images/svg/mobiletest.png'
import Cup1 from '../images/awards/firstcup.png'
import Cup2 from '../images/awards/secondcup.png'
import MultiCup from '../images/awards/firstcuphp.png'
import SpecialAward from '../images/awards/specialaward.png'
import Top5 from '../images/awards/top5.png'
import Carusel from "./CaruselMobile"
import { useMediaQuery } from 'react-responsive';
import { Title } from "../components/micros/index"
import TeamMobile from "./TeamMobile"

const projectNameList = ["Health Point", "Vuer", "Teddy", "Pulse", "EduMatch", "Ready?Donate!", "InTouch", "UniNetwork"];
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


const ProjectBackgroundMobile = styled.img`
padding-top:50px;
width:100%;
height:auto;
position: absolute;
z-index:0;
`

const TitleBar = styled.div`

`

const ProjectDescriptionCard = styled.div`
padding-top:150px;
position: absolute;
z-index:1;

`

const ProjectDescriptionMobile = styled.h2`
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size: 0.8em;
    padding-left:5%;
    padding-right:5%;
`

const ProjectTitleMobile = styled.h2`
    padding-top:100px;
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size: 1.0em;
    position:absolute;
    left:0;
    right:0;
`
const CaruselMobileBox = styled.div`
    margin-left: 30px;
    margin-right: 30px;
`

const Content = styled.div`


`

export default () => {

    const [projectName, setProjectName] = useState(projectNameList[0]);
    const [projectDesc, setProjectDesc] = useState(projectDescList[0]);
    const [projectAward, setProjectAward] = useState(projectAwardList[0]);
    const [projectAwardCup, setProjectAwardCup] = useState(projectAwardIcon[0]);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const setProjectInfo = (prjNumber) => {
        console.log(prjNumber);
        setProjectName(projectNameList[prjNumber]);
        setProjectDesc(projectDescList[prjNumber]);
        setProjectAward(projectAwardList[prjNumber]);
        setProjectAwardCup(projectAwardIcon[prjNumber]);
    }

    return (
        <>
            <Title id="projects">
                Our Projects
                </Title>
            <CaruselMobileBox>
                <Carusel setState={(p) => { setProjectInfo(p) }} />
            </CaruselMobileBox>

            <ProjectBackgroundMobile src={TeamBackMobile} />
            <Content>
                <TitleBar>
                    <ProjectTitleMobile >
                        {projectName}
                    </ProjectTitleMobile>
                </TitleBar>

                <ProjectDescriptionCard>
                    <ProjectDescriptionMobile>
                        {projectDesc}
                    </ProjectDescriptionMobile>
                </ProjectDescriptionCard>
            </Content>
        </>
    );
}