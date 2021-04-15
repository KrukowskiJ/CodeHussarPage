import styled from "styled-components"
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Image1 from '../images/gallery/fut.jpg';
import Image2 from '../images/gallery/hac.jpg';
import Image3 from '../images/gallery/hackcarrots.jpg';
import Image4 from '../images/gallery/hplus2019.jpg';
import Image5 from '../images/gallery/imaginecup.jpg';
import Image6 from '../images/gallery/imaginehack.jpg';
import Image7 from '../images/gallery/pekao.jpg';
import Image8 from '../images/gallery/bhl.jpg';
import Zoom from 'react-reveal/Zoom';
import { useMediaQuery } from 'react-responsive';
import { Title } from "../components/micros/index"
import { StaticImage } from "gatsby-plugin-image"

const ImagePhotoFull = styled.img`
    width:100%; 
    height:100%; 
    padding:0.5vw;
    @media (max-width: 760px) {
        padding:0.3vw;
        }
    -webkit-transition: 0.3s ease-in-out, -webkit-transform: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out, -moz-transform 0.3s ease-in-out;
    transition: 0.3s ease-in-out, transform 0.3s ease-in-out;
    filter: blur(0px) grayscale(0.05) opacity(0.9);
    :hover
    {
        filter: blur(0px) grayscale(0) opacity(1);
        transform:scale(1.03);
    }
`
const styles = {
    grid: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};

const PhotoContainer = styled.div`
    margin-right: 5vw;
    margin-left: 5vw;
    margin-bottom:3vw;
`

export default () => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    if (isMobile == true) {
        return (
            <Container>
                <Title>Gallery</Title>
                <PhotoContainer id="gallery">
                    <Row>
                        <Col xs="6" style={styles.col}>
                            <Zoom>
                                <ImagePhotoFull src={Image5} />
                            </Zoom>
                        </Col>
                        <Col xs="6" style={styles.col}>
                            <Zoom>
                                <ImagePhotoFull src={Image1} />
                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" style={styles.col}>
                            <Zoom>
                                <ImagePhotoFull src={Image8} />
                            </Zoom>
                        </Col>
                        <Col xs="6" style={styles.col}>
                            <Zoom>
                                <ImagePhotoFull src={Image6} />
                            </Zoom>
                        </Col>
                    </Row>
                    <Row>
                        <Zoom>
                            <ImagePhotoFull src={Image7} />
                        </Zoom>
                    </Row>
                </PhotoContainer>
            </Container>
        );
    } else {
        return (
            <>
                <Container fluid>
                    <Title>Gallery</Title>
                    <PhotoContainer id="gallery">
                        <Row>
                            <Col md="7">
                                <Row>
                                    <Col md="6" style={styles.col}>
                                        <Zoom>
                                            <ImagePhotoFull src={Image5} />
                                        </Zoom>
                                    </Col>
                                    <Col md="6" style={styles.col}>
                                        <Zoom>
                                            <ImagePhotoFull src={Image1} />
                                        </Zoom>
                                    </Col>
                                </Row>
                                <Row>
                                    <Zoom>
                                        <ImagePhotoFull src={Image7} />
                                    </Zoom>
                                </Row>
                            </Col>
                            <Col md="5">
                                <Row>
                                    <Zoom>
                                        <ImagePhotoFull src={Image4} />
                                    </Zoom>
                                </Row>
                                <Row>
                                    <Zoom>
                                        <ImagePhotoFull src={Image6} />
                                    </Zoom>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" style={styles.col}>
                                <Zoom>
                                    <ImagePhotoFull src={Image8} />
                                </Zoom>
                            </Col>
                            <Col md="4" style={styles.col}>
                                <Zoom>
                                    <ImagePhotoFull src={Image2} />
                                </Zoom>
                            </Col>
                            <Col md="4" style={styles.col}>
                                <Zoom>
                                    <ImagePhotoFull src={Image3} />
                                </Zoom>
                            </Col>
                        </Row>
                    </PhotoContainer>
                </Container>
            </>
        );
    }
}