import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import BackgroundRed from '../images/svg/stopka.svg'

const Background = styled.div`
    width: 100%; 
    height:40vw;
    margin: 0;
    padding:0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${BackgroundRed});
`

export default () => {
    return (
        <Background>

        </Background>
    );
}