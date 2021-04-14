import React from "react"
import styled from "styled-components"
import { Title } from "../components/micros/index"
import { Container, Row, Col } from "react-bootstrap";
import CupFull from '../images/awards/cupfull.svg'
import Flip from 'react-reveal/Flip'
import jsonData from '../settings/awards.json';

const awards = [...jsonData];

const ImageCup = styled.img`
    height:50%;
    padding:10%;
    padding-bottom:10%;
    margin-left:auto;
    margin-right:auto;
    display:block;
`

const AwardBox = styled.div`
    padding-left:10%;
    padding-right:10%;
`

const TitleAward = styled.h2`
    text-align:center;
    color: #BDBABA;
    font-size: 15px;
    font-family: IBM Plex Mono;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`


const CompetitionsName = styled.h2`
    text-align:center;
    font-size: 15px;
    font-family: IBM Plex Mono;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const AwardBack = styled.div`
    margin-bottom:5vw;
    margin-top:1200px;
`

export default () => {
    return (
        <AwardBack>
            <Title>
                Our Achievements
            </Title>
            <Container>
                <Row>
                    {awards.map((award) => {
                        return (
                            <Col md="3" xs="6">
                                <Flip left>
                                    <AwardBox>
                                        <ImageCup src={CupFull} />
                                        <TitleAward>
                                            {award.place}
                                        </TitleAward>
                                        <CompetitionsName>
                                            {award.title}
                                        </CompetitionsName>
                                    </AwardBox>
                                </Flip>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </AwardBack>
    );
}