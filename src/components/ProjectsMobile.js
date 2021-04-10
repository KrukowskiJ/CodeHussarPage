import React, { useState } from "react"
import styled from "styled-components"
import TeamBackMobile from '../images/svg/ourprojectsMobile.svg'
import Cup1 from '../images/awards/firstcup.png'
import Cup2 from '../images/awards/secondcup.png'
import MultiCup from '../images/awards/firstcuphp.png'
import SpecialAward from '../images/awards/specialaward.png'
import Top5 from '../images/awards/top5.png'
import Carusel from "./Carusel"
import { useMediaQuery } from 'react-responsive';
import { Title } from "../components/micros/index"

const projectNameList = ["Health Point", "Vuer", "Teddy", "Pulse", "EduMatch", "Ready?Donate!", "InTouch", "UniNetwork"];
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


const ProjectBackgroundMobile = styled.div`
width: 100%; 
height: 100%;
margin:0;
margin-top: 3vw;
padding:0;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${TeamBackMobile});
padding-top:10vw;
padding-bottom:15vw;
`

const TitleBar = styled.div`
margin-top:2vw;
margin-bottom:1vw;
align-self:center;
flex:1;
justify-content: "center";
`

const ProjectDescriptionCard = styled.div`
height:10vw;
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
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size: 1.0em;
`
const CaruselMobile = styled.div`
    margin: 15px;
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
            <CaruselMobile>
                <Carusel setState={(p) => { setProjectInfo(p) }} />
            </CaruselMobile>

            <ProjectBackgroundMobile>
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
            </ProjectBackgroundMobile>
        </>
    );
}