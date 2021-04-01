import React from "react"
import styled from "styled-components"
import { Title } from "../components/micros/index"
import { Container, Row, Col } from "react-bootstrap";
import CupEmpty from '../images/awards/cupempty.svg'
import CupFull from '../images/awards/cupfull.svg'


const awards=[
    {
        title:"Microsoft Imagine Hack 2018",
        cup:CupFull,
        place:"Winner of"
    },
    {
        title:"Best IT Project 2018",
        cup:CupFull,
        place:"Forum of Technical Universities"
    },
    {
        title:"Microsoft Imagine Cup 2018",
        cup:CupEmpty,
        place:"TOP 3"
    },
    {
        title:"nMedycyna+ 2018",
        cup:CupFull,
        place:"Winner of"
    },
    {
        title:"Project of Military University of Technology 2018",
        cup:CupEmpty,
        place:"Second place"
    },
    {
        title:"Hackathon + GOV",
        cup:CupFull,
        place:"Second place"
    },
    {
        title:"HackOne 2019",
        cup:CupFull,
        place:"Winner of"
    },
    {
        title:"Best Hacking League",
        cup:CupFull,
        place:"Winner of"
    },
    {
        title:"Hacking Carrots",
        cup:CupEmpty,
        place:"Special Award of"
    },
    {
        title:"HackYeah 2020",
        cup:CupEmpty,
        place:"TOP 3"
    },
    {
        title:"EduHack 2021",
        cup:CupFull,
        place:"Winner of"
    }
]

const ImageCup = styled.img`
    width:100%;
    padding:30%;
    padding-bottom:5%;
`

const AwardBox=styled.div`
    padding:10%;
`

const TitleAward = styled.h2`
    text-align:center;
    color: #BDBABA;
    font-size: 20px;
    font-family: IBM Plex Mono;
`


const CompetitionsName=styled.h2`
    text-align:center;
    font-size: 20px;
    font-family: IBM Plex Mono;
`

export default()=>{
    return(
        <>
                <Title>
                     Our Achievements
                </Title>
                <Container>
                    <Row>
                        {awards.map((award)=>{
                            return(
                                <Col md="4">
                                    <AwardBox>
                                        <ImageCup src={award.cup} />
                                        <TitleAward>
                                            {award.place}               
                                        </TitleAward>
                                        <CompetitionsName>
                                            {award.title}
                                        </CompetitionsName>
                                    </AwardBox>
                                </Col>
                            );
                        })}
                    </Row> 
                </Container>            
        </>
    );
}