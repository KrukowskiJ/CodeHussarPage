import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import BackgroundRed from '../images/svg/stopka.svg'
import Linkedin from '../images/linkedin.png'
import Fb from '../images/fb.png'
const Background = styled.div`
    margin: 0;
    padding: 6vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${BackgroundRed});
`

const ContactText = styled.h3`
    font-family: IBM Plex Mono;
    font-style: normal;
    font-size: 2vw;
    color:#fff;
    text-align:center;
`
const ImagePortal = styled.img`
    margin:2vw;
    height:4vw;
`

const Logo = styled.div`
`
const ContactBox = styled.div`
    padding-top:4vw;
    display: flex;
	justify-content: center;
	align-items: center;
`

export default () => {
    return (
        <Background>
            <ContactBox>
                <Logo>
                    <ImagePortal src={Fb} />
                    <ImagePortal src={Linkedin} />
                </Logo>
            </ContactBox>
                <ContactText>
                    contact@codehussar.com
                </ContactText>

        </Background>
    );
}