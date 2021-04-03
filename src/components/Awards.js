import React from "react"
import styled from "styled-components"
import { Title } from "../components/micros/index"
import { Container, Row, Col } from "react-bootstrap";
import CupEmpty from '../images/awards/cupempty.svg'
import CupFull from '../images/awards/cupfull.svg'
import Flip from 'react-reveal/Flip'
import jsonData from '../settings/awards.json';

const awards = [...jsonData];
// const awards=[
//     {
//         title:"Microsoft Imagine Hack 2018",
//         cup:CupFull,
//         place:"Winner of"
//     },
//     {
//         title:"Best IT Project 2018",
//         cup:CupFull,
//         place:"Forum of Technical Universities"
//     },
//     {
//         title:"Microsoft Imagine Cup 2018",
//         cup:CupFull,
//         place:"TOP 3"
//     },
//     {
//         title:"nMedycyna+ 2018",
//         cup:CupFull,
//         place:"Winner of"
//     },
//     {
//         title:"Project of Military University of Technology 2018",
//         cup:CupFull,
//         place:"Second place"
//     },
//     {
//         title:"Hackathon + GOV",
//         cup:CupFull,
//         place:"Second place"
//     },
//     {
//         title:"HackOne 2019",
//         cup:CupFull,
//         place:"Winner of"
//     },
//     {
//         title:"Best Hacking League",
//         cup:CupFull,
//         place:"Winner of"
//     },
//     {
//         title:"Hacking Carrots",
//         cup:CupFull,
//         place:"Special Award of"
//     },
//     {
//         title:"HackYeah 2020",
//         cup:CupFull,
//         place:"TOP 3"
//     },
//     {
//         title:"EduHack 2021",
//         cup:CupFull,
//         place:"Winner of"
//     }
// ]

const ImageCup = styled.img`
    height:50%;
    padding:30%;
    padding-bottom:5%;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const AwardBox=styled.div`
    padding:0;
    padding-left:10%;
    padding-right:10%;
`

const TitleAward = styled.h2`
    text-align:center;
    color: #BDBABA;
    font-size: 15px;
    font-family: IBM Plex Mono;
`


const CompetitionsName=styled.h2`
    text-align:center;
    font-size: 15px;
    font-family: IBM Plex Mono;
`

const AwardBack=styled.div`
    margin-bottom:5vw;
`

export default()=>{
    return(
        <AwardBack>
                <Title>
                     Our Achievements
                </Title>
                <Container>
                    <Row>
                        {awards.map((award)=>{
                            return(
                                <Col md="3">
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