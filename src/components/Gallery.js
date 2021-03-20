import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap";
import Image1 from '../images/fut.jpg';
import Image2 from '../images/hac.jpg';
import Image3 from '../images/hackcarrots.jpg';
import Image4 from '../images/hplus2019.jpg';
import Image5 from '../images/imaginecup.jpg';
import Image6 from '../images/imaginehack.jpg';
import Image7 from '../images/pekao.jpg';
import Image8 from '../images/bhl.jpg';
import Zoom from 'react-reveal/Zoom';


const ImagePhotoFull=styled.img`
    width:100%; 
    height:100%; 
    padding:0.5vw;
    -webkit-transition: 0.3s ease-in-out, -webkit-transform: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out, -moz-transform 0.3s ease-in-out;
    transition: 0.3s ease-in-out, transform 0.3s ease-in-out;

    &: hover
    {
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

const PhotoContainer=styled.div`
    margin-right: 5vw;
    margin-left: 5vw;
`

export default ()=>{
    return(
        <>
            <Container fluid>
                    <PhotoContainer>
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