import styled from "styled-components"
import React from "react"
import BackgroundRed from '../images/svg/stopkanew.svg'
import Linkedin from '../images/linkedin.png'
import Fb from '../images/fb.png'
const Background = styled.div`
    margin: 0;
    padding-top:150px;
    padding-bottom:50px;

`

const ContactText = styled.h3`
    font-family: IBM Plex Mono;
    font-style: normal;
    font-size:1.0em;
    color:#ffffff;
    text-align:center;
    position: absolute;
    padding-top:70px;
    font-size:10px;
    z-index:2;
`

const ImagePortal2 = styled.img`
    height:70px;
    width: auto;
    color:#ffffff;
    text-align:center;
    position: absolute;
    z-index:2;
    padding-top:40px;
    left:45%;
    right:55%;
:hover{

    transform: scale(1.05);

}
`

const ImagePortal = styled.img`
    height:70px;
    width: auto;
    color:#ffffff;
    text-align:center;
    position: absolute;
    z-index:2;
    padding-top:40px;
    left:55%;
    right:45%;
:hover{

    transform: scale(1.05);

}
`
const BackImg = styled.img`
width:100%;
height:auto;
position: absolute;
z-index:0;
`

const Logo = styled.div`

`
const ContactBox = styled.div`
    position:absolute;
    left:50%;
    right:50%;
    z-index:2;
`




export default () => {
    return (
        <>
            <BackImg src={BackgroundRed} id="contact" />
            <ImagePortal src={Fb} onClick={() => window.open('https://www.facebook.com/codehussar/', '_blank')} />
            
            <ImagePortal2 src={Linkedin} onClick={() => window.open('https://pl.linkedin.com/company/code-hussar-wat', '_blank')} />
           
            {/* <ContactText>
                contact@codehussar.com
            </ContactText>   */}
        </>
    );
}