import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick";
import Pulse from '../images/articles/wat.png'
import ReadyDonate from '../images/articles/ic 21.png'
import Uninetwork from '../images/articles/kokon.png'
import ProjectCard from '../components/micros/ArticleCard.js'
import "./slick.css";
import PrevArrowImg from "../images/prevarrow.png"
import NextArrowImg from "../images/nextarrow.png"

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


    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <ArrowBox src={PrevArrowImg} />
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <ArrowBox src={NextArrowImg} />
            </div>
        );
    }

    const settings = {
        centerPadding: 0,
        centerMode: true,
        cssEase: 'cubic-bezier(0,.67,1,.34)',
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
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
        return (<>
            <CARD>
                <ProjectCard img={projectPictureList[prjNumber - 1]} />
                <ProjectName style={{ marginTop: "0px" }}>{projectNameList[prjNumber - 1]}</ProjectName>
            </CARD></>
        );
    }


    return (<About>

        <HeaderTitle>
            About Us
        </HeaderTitle>

        < CaruselBack>
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
            <RedLine></RedLine>
        </ CaruselBack>

    </About>)

}


const About = styled.div`
    margin-bottom: 10vh;
`

const HeaderTitle = styled.h1`
    text-align:center;
    color:black;
    font-size: 3em;
`

const ProjectName = styled.h1`
    font-size: 0.8em;
    margin: auto;
    text-align: center;
    color:black;
    
`
const CARD = styled.div`
justify-content:center;
align-items: center;
`
const CaruselBack = styled.div`
margin:auto;
width: 90%;
`
const ArrowBox = styled.img`
margin:0px;

:hover{

    transform: scale(1.2);

}
`

const RedLine = styled.div`
background-color:#A72727;
    width:100%;
    height:2px;
    margin-top: 40px;
`

export default AboutUS