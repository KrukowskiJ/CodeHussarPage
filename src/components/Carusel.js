import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import Pulse from '../images/projects/pulse.jpg'
import ReadyDonate from '../images/projects/readydonate.png'
import Uninetwork from '../images/projects/uniconnect.png'
import EduMatch from '../images/projects/edumatch.jpg'
import HealthPoint from '../images/projects/healthpoint.jpg'
import InTouch from '../images/projects/intouch.png'
import Teddy from '../images/projects/teddy.jpg'
import Vuer from '../images/projects/vuer.jpg'
import Slider from "react-slick";
import PrevArrowImg from "../images/prevarrow.png"
import NextArrowImg from "../images/nextarrow.png"
import ProjectCard from '../components/micros/ProjectCard.js'

export default(props)=>{

    const settings = {
        centerPadding: 0,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };


    const CaruselBack = styled.div`
        margin:auto;
        width: 90%;
        justify-content:center;
        align-items: center;
    `

    const setProject = (prjNumber) => {
        return (
            <ProjectCard img={projectPictureList[prjNumber - 1]} />
        );
    }

    var projectPictureList = [HealthPoint, Vuer, Teddy, Pulse, EduMatch, ReadyDonate, InTouch, Uninetwork];

    const ArrowBox = styled.img`
    margin:0px;
`
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


    return(
        <CaruselBack>
        <Slider {...settings}>

            <div onClick={() => { props.setState(1) }}>
                {setProject(1)}
            </div>

            <div onClick={() => { props.setState(2) }}>
                {setProject(2)}
            </div>

            <div onClick={() => {props.setState(3)  }}>
                {setProject(3)}
            </div>

            <div onClick={() => { props.setState(4)  }}>
                {setProject(4)}
            </div>

            <div onClick={() => { props.setState(5) }}>
                {setProject(5)}
            </div>

            <div onClick={() => { props.setState(5) }}>
                {setProject(6)}
            </div>

            <div onClick={() => { props.setState(5)}}>
                {setProject(7)}
            </div>

            <div onClick={() => { props.setState(5) }}>
                {setProject(8)}
            </div>

        </Slider>
    </CaruselBack>

    );
}
