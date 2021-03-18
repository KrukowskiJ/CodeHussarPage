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

const ImagePhotoFull=styled.img`
    width:100%; 
    height:100%; 
    padding:0.5vw;
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

export default ()=>{
    return(
        <>
            <Container>
                <Row>
                    <Col md="7">
                        <Row>
                            <Col md="6" style={styles.col}>
                               <ImagePhotoFull src={Image5} />
                            </Col>
                            <Col md="6" style={styles.col}>
                               <ImagePhotoFull src={Image1} />                    
                            </Col>
                        </Row>
                        <Row>
                            <ImagePhotoFull src={Image7} />                       
                        </Row>
                    </Col>
                    <Col md="5">
                        <Row>
                            <ImagePhotoFull src={Image4} />
                        </Row>
                        <Row>
                            <ImagePhotoFull src={Image6} />                       
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" style={styles.col}>
                       <ImagePhotoFull src={Image8} />   
                    </Col>
                    <Col md="4" style={styles.col}>
                       <ImagePhotoFull src={Image2} />                           
                    </Col>
                    <Col md="4" style={styles.col}>
                       <ImagePhotoFull src={Image3} />                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}