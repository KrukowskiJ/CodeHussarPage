import styled from "styled-components"
import React from "react"
import BackgroundRed from '../images/svg/stopkanew.svg'
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

    
:hover{

    transform: scale(1.05);

}
`

const Logo = styled.div`
    margin-top:80px;
`
const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`




export default () => {
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