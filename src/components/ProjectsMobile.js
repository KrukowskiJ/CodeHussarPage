
import React, { useState } from "react"
import ImageBackground from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import TeamBack from '../images/svg/topbacktmp.png'
import TeamBackMobile from '../images/svg/backgroundMobileTop.png'

import Pulse from '../images/projects/pulse.jpg'
import ReadyDonate from '../images/projects/readydonate.png'
import Uninetwork from '../images/projects/uniconnect.png'
import EduMatch from '../images/projects/edumatch.jpg'
import HealthPoint from '../images/projects/healthpoint.jpg'
import InTouch from '../images/projects/intouch.png'
import Teddy from '../images/projects/teddy.jpg'
import Vuer from '../images/projects/vuer.jpg'
import Cup1 from '../images/awards/firstcup.png'
import Cup2 from '../images/awards/secondcup.png'
import MultiCup from '../images/awards/firstcuphp.png'
import SpecialAward from '../images/awards/specialaward.png'
import Top5 from '../images/awards/top5.png'
import Carusel from "./Carusel"
import { useMediaQuery } from 'react-responsive';


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

const ProjectBackground = styled.div`
width: 100%; 
height: 100%;
margin:0;
margin-top: 3vw;
padding:0;
background-repeat: no-repeat;
background-size: cover;
background-image:url(${TeamBack});
padding-top:10vw;
`

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



const Project = styled.div`

`

const TitleBar = styled.div`
margin-top:2vw;
margin-bottom:1vw;
align-self:center;
flex:1;
justify-content: "center";
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

const ProjectDescriptionMobile = styled.h2`
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size: 1em;
    padding-left:5%;
    padding-right:5%;
`

const ProjectTitleMobile = styled.h2`
    text-align:center;
    color:white;
    font-family: IBM Plex Mono;
    font-size: 1.5em;
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

        return(
            <>
                <HeaderTitleBack id="projects">
                    <HeaderTitle>
                        Our Projects
                    </HeaderTitle>
                </HeaderTitleBack>
                <div>
                    <Carusel setState={(p) => { setProjectInfo(p) }} />
                </div>

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