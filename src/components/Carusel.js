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
        focusOnSelect:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        afterChange:(index)=>{props.setState(index)},
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
              <ProjectCard img={projectPictureList[0] } index={1}/>
              <ProjectCard img={projectPictureList[1] } index={2}/>
              <ProjectCard img={projectPictureList[2] } index={3}/>
              <ProjectCard img={projectPictureList[3] } index={4}/>
              <ProjectCard img={projectPictureList[4] } index={5}/>
              <ProjectCard img={projectPictureList[5] } index={6}/>
              <ProjectCard img={projectPictureList[6] } index={7}/>
              <ProjectCard img={projectPictureList[7] } index={8}/>
        </Slider>
    </CaruselBack>

    );
}
