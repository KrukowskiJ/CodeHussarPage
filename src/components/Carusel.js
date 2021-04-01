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
import props from 'prop-types';
import { Component } from "react"


const CaruselBack = styled.div`
    margin:auto;
    width: 90%;
    justify-content:center;
    align-items: center;
`


var projectPictureList = [HealthPoint, Vuer, Teddy, Pulse, EduMatch, ReadyDonate, InTouch, Uninetwork];

const ArrowBox = styled.img`
margin:0px;
`

export default class Carusel extends Component{

    constructor(props) {
        super(props);
      }

      shouldComponentUpdate(nextProps, nextState){
        return false;
     }


    render(){
        const Testowa=(index)=>{
            console.log("Test");
            this.props.setState(index)
        }
        
        const settings = {
            centerPadding: 0,
            centerMode: true,
            focusOnSelect:true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            // initialSlide:test,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            onInit:()=>{console.log("Init")},
            beforeChange:(t,index)=>{Testowa(index)},
            responsive: [
                {
                    breakpoint: 1624,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        };
        
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
}
