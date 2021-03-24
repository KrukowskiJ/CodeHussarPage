import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick";
import WAT from '../images/articles/wat.png'
import Ic21 from '../images/articles/ic 21.png'
import Kokon from '../images/articles/kokon.png'
import ProjectCard from '../components/micros/ArticleCard.js'
import Ic from "../images/ic20.png"
import PZ from "../images/pz.jpg"
import PW from "../images/pw.jpg"
import "./slick.css";
import PrevArrowImg from "../images/prevarrow.png"
import NextArrowImg from "../images/nextarrow.png"
import Czworka from "../images/czworka.jpg"

var projectNameList = ["Microsoft Imagine Cup 2020", 
"Best IT Project Poland 2018", "Microsoft Imagine Cup 2018",
"Microsoft Imagine Hack", "Hackathon+ MIiR.GOV 2018",
"Best Hacking League 2019 CZIiTT PW",
"EduHack 2021"
];
var projectPictureList = [Ic, Kokon, Ic21,PZ, WAT,PW,Czworka];
var projectLinkList = [
    "https://www.youtube.com/watch?v=l9aqH1sXtks",
    "https://www.wat.edu.pl/aktualnosci/sukces-projektu-health-point-w-konkursie-kol-naukowych-kokon/",
    "https://www.youtube.com/watch?v=xqpJttzJ9fc&t=16s",
    "http://polska-zbrojna.pl/home/articleshow/28269?title=Programisci-z-WAT-zwyciezcami-Best-Hacking-League&fbclid=IwAR3ozcbCVuGH8D3f2kKe5seKrl2S7Q0TxxkLtNIqpz5PMJu7MDRouJPDibY",
    "https://www.wat.edu.pl/aktualnosci/drugie-miejsce-dla-programistow-z-wat-w-hackatonie/?fbclid=IwAR0_Rppv37Fqd5ClarPS5oQQjFCLGRUKaXeWM1K1VM5Bw_wJIjmo6AakF-8",
    "http://polska-zbrojna.pl/home/articleshow/28269?title=Programisci-z-WAT-zwyciezcami-Best-Hacking-League&fbclid=IwAR3ozcbCVuGH8D3f2kKe5seKrl2S7Q0TxxkLtNIqpz5PMJu7MDRouJPDibY",
    "https://www.polskieradio.pl/10/5566/Artykul/2666982,Sukcesy-polskich-studentow-i-aplikacje-ulawiajace-zycie?fbclid=IwAR1zdK39mYdtddwDOQN3N7HPu536hj6OwQus9UpGriHV6LQmUuwTggp8hu0"
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
        speed: 600,
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
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
                <div onClick={() => { setProjectInfo(4) }}>
                    {setProject(4)}
                </div>

                <div onClick={() => { setProjectInfo(5) }}>
                    {setProject(5)}
                </div>

                <div onClick={() => { setProjectInfo(6) }}>
                    {setProject(6)}
                </div>

                <div onClick={() => { setProjectInfo(7) }}>
                    {setProject(7)}
                </div>
            </Slider>
            <RedLine></RedLine>
        </ CaruselBack>

    </About>)

}


const About = styled.div`
    margin-bottom: 20vh;
`

const HeaderTitle = styled.h1`
    text-align:center;
    color:black;
    padding-bottom:2vw;
    font-family: IBM Plex Mono;
    font-size:3vw;
`

const ProjectName = styled.h1`
    font-size: 1em;
    padding:10px;
    margin: auto;
    text-align: center;
    color:black;
    font-family: IBM Plex Mono;
    
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

`

const RedLine = styled.div`
background-color:#A72727;
    width:100%;
    height:2px;
    margin-top: 40px;
`

export default AboutUS