import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick";
import Pulse from '../images/articles/wat.png'
import ReadyDonate from '../images/articles/ic 21.png'
import Uninetwork from '../images/articles/kokon.png'
import ProjectCard from '../components/micros/ProjectCard.js'
import "./slick.css";

var projectNameList = ["Pulse", "Uninetwork", "ReadyDonate"];
var projectPictureList = [Pulse, Uninetwork, ReadyDonate];
var projectLinkList = [
    "https://www.w3schools.com",
    "https://www.w3schools.com",
    "https://www.chess.com/home"
]

const AboutUS = () => {


    const [projectName, setProjectName] = useState(projectNameList[0]);
    const [projectLink, setProjectLink] = useState(projectLinkList[0]);
    const [projectPicture, setProjectPicture] = useState(projectPictureList[0]);




    const settings = {
        centerPadding: 0,
        centerMode: true,
        cssEase: "linear",
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const setProjectInfo = (prjNumber) => {
        setProjectName(projectNameList[prjNumber - 1]);
        setProjectLink(projectLinkList[prjNumber - 1]);
        setProjectPicture(projectPictureList[prjNumber - 1]);
        window.open(projectLinkList[prjNumber - 1], '_blank');
    }
    const setProject = (prjNumber) => {
        console.log(projectPictureList[prjNumber - 1]);
        return (<>

            <ProjectCard img={projectPictureList[prjNumber - 1]} />
            <ProjectName style={{ marginTop: "30px" }}>{projectNameList[prjNumber - 1]}</ProjectName>
        </>
        );
    }


    return (<About>

        <HeaderTitle>
            About Us
        </HeaderTitle>


        <Slider {...settings}>

            <div onClick={() => { setProjectInfo(1) }}>
                {setProject(1)}
            </div>

            <div onClick={() => { setProjectInfo(2) }}>
                {setProject(2)}
            </div>

            <div onClick={() => { setProjectInfo(3) }}>
                {setProject(3)}
            </div>
            <div onClick={() => { setProjectInfo(1) }}>
                {setProject(1)}
            </div>

            <div onClick={() => { setProjectInfo(2) }}>
                {setProject(2)}
            </div>

            <div onClick={() => { setProjectInfo(3) }}>
                {setProject(3)}
            </div>

        </Slider>


    </About>)

}


const About = styled.div`
    margin-top: 30vh;
    margin-bottom: 30vh;
`

const HeaderTitle = styled.h1`
    text-align:center;
    color:black;
    margin: 100px;
    font-size: 3em;
`

const ProjectName = styled.h1`
    font-size: 1em;
    margin: auto;
    text-align: center;
    color:black;
    
`






export default AboutUS