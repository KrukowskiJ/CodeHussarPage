import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import BackgroundRed from '../images/svg/stopka.svg'
import Linkedin from '../images/linkedin.png'
import Fb from '../images/fb.png'
const Background = styled.div`
    width: 100%; 
    height:45vw;
    margin: 0;
    padding-top: 25vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${BackgroundRed});
`

const ContactText = styled.h3`
    font-family: IBM Plex Mono;
    font-style: normal;
    font-size: 2vw;
    color:#fff;
`
const ImagePortal = styled.img`
    margin:20px;
    height:50px;
`

const Logo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto ;
`

export default () => {
    return (
        <Background>
            <Container>
                <Row>
                    <Col md="7"></Col>
                    <Col md="4">
                        <Row>
                            <Logo>
                                <ImagePortal src={Fb} />
                                <ImagePortal src={Linkedin} />
                            </Logo>
                        </Row>
                        <ContactText>
                            contact@codehussar.com
                        </ContactText>
                    </Col>
                </Row>
            </Container>
        </Background>
    );
}