import styled from "styled-components"
import React from "react"
import BackgroundRed from '../images/svg/stopkanew.svg'
import Linkedin from '../images/linkedin.png'
import Fb from '../images/fb.png'
import { useMediaQuery } from 'react-responsive';
import StopkaMobile from "../components/StopkaMobile"



const Background = styled.div`
    width:100%;
    margin: 0;
    padding-bottom:80px;
    padding-top:180px;

    @media (max-width: 1600px) {
        padding-bottom:50px;
        padding-top:150px;
        }
    @media (max-width: 760px) {
            font-size:2em;
        }

    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${BackgroundRed});
`

const ContactText = styled.h3`
    font-family: IBM Plex Mono;
    font-style: normal;
    font-size:2.0em;
    @media (max-width: 1600px) {
            font-size:1.4em;
            margin-top:10px;
        }
    @media (max-width: 760px) {
            font-size:2em;
        }
    color:#fff;
    text-align:center;
`
const ImagePortal = styled.img`
    height:4vw;
    margin:2vw;
    margin-bottom:0;
    

    
:hover{

    transform: scale(1.05);

}
`

const Logo = styled.div`
    margin-top:80px;
    margin:1vw;
`
const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`




export default () => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    if(isMobile==true){
        return(
            <StopkaMobile />
        );
    }else{
        return (
            <Background id="contact">
                <ContactBox>
                    <Logo>
                        <ImagePortal src={Fb} onClick={() => window.open('https://www.facebook.com/codehussar/', '_blank')} />
                        <ImagePortal src={Linkedin} onClick={() => window.open('https://pl.linkedin.com/company/code-hussar-wat', '_blank')} />
                    </Logo>
                </ContactBox>
                <ContactText>
                    contact@codehussar.com
                    </ContactText>
    
            </Background>
        );
    }
}