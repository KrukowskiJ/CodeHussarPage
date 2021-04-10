import styled from "styled-components"
import React from "react"
import BackgroundRed from '../images/svg/stopkanew.svg'
import Linkedin from '../images/linkedin.png'
import Fb from '../images/fb.png'
const Background = styled.div`
    margin: 0;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top:150px;
    padding-bottom:50px;
    background-image:url(${BackgroundRed});
`

const ContactText = styled.h3`
    font-family: IBM Plex Mono;
    font-style: normal;
    font-size:1.0em;
    color:#fff;
    text-align:center;
    margin-top:10px;
`
const ImagePortal = styled.img`
    height:30px;
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