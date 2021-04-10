import styled from "styled-components"
import React, { useState, useEffect, useRef } from "react"
import Team_pic from "../images/team1.svg"
import Logo_pic from "../images/Logo.png"
import BackNav from "../images/navbackground.svg"
import NavbarLinks from "./NavbarLinks"
import Fade from 'react-reveal/Flip';


const NavBar = () => {
  const [NavbarStatus, changeNavbarStatus] = useState('top')
  const [MobileStatus, changeMobileStatus] = useState(1)
  const navRef = React.useRef()

  navRef.current = NavbarStatus
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight * 0.5
      if (show)
        changeNavbarStatus('not')
      else
        changeNavbarStatus('top')
    }
    const handleWidth = () => {
      if (window.innerWidth <= 768)
        changeMobileStatus(1)
      else
        changeMobileStatus(0)
    }
    document.addEventListener('scroll', handleScroll)
    document.addEventListener('resize', handleWidth)
    handleWidth();
    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('resize', handleWidth)
    }

  })

  return (
    <>


      { MobileStatus ?
        <>
          <BackImg id="home"
            alt="CodeHussarLogo"
            src={BackNav}
          />

          <Nav >
            {NavbarStatus === 'top' ? <BackImgTransparent /> :
              <BackImg2 />}
          </Nav>

          <Col>
            <Logo
              alt="CodeHussarLogo"
              src={Logo_pic}
              width="73px"
              height="82px"
            />
            <Fade left>
              <QuoteText>
                <BigText>WORKING FOR A <b>BETTER</b> TOMMOROW</BigText>
              </QuoteText>
            </Fade>
          </Col>

        </>

        :

        <> <BackImg id="home"
          alt="CodeHussarLogo"
          src={BackNav}
        />
          <Nav >
            {NavbarStatus === 'top' ? <BackImgTransparent /> :
              <BackImg2 />}
            <Logo
              alt="CodeHussarLogo"
              src={Logo_pic}
              width="73px"
              height="82px"
            />

            <Navbox>
              <NavbarLinks />
            </Navbox>


          </Nav>

          <Row>
            <Team1
              alt="CodeHussar"
              src={Team_pic}
            />
            <Fade left>
              <QuoteText>
                <BigText>WORKING FOR A <b>BETTER</b> TOMMOROW</BigText>
                <SmallText>SOFTWARE DEVELOPMENT TEAM</SmallText>
              </QuoteText>
            </Fade>
          </Row>
        </>
      }


    </>
  )
}

export default NavBar

// styles
const BackImg = styled.img`
position: absolute;
height: auto; 
z-index:-10;
width: 100vw;
`
const BackImg2 = styled.div`
background: rgb(83,9,22);
background: linear-gradient(173deg, rgba(83,9,22,1) 0%, rgba(173,34,33,1) 45%, rgba(254,68,83,1) 100%);
top:0;
position: absolute;
z-index: -1;
height: 10vh;
width:100%;
`

const BackImgTransparent = styled.div`
background: transparent;
top:0;
position: absolute;
z-index: -1;
height: 10vh;
width:100%;
`

const Logo = styled.img`
height: 80%; 
width: auto; 
max-width: 209px; 
max-height: 90px;
margin: auto;
z-index: 5;
`

const Team1 = styled.img`
margin-top: 3%;
position: relative;
height: auto; 
width: 37%;  //735/1980*100

@media (max-width: 1320px) {
  margin-top: 2%;
}
@media (max-width: 1100px) {
  margin-top: 0%;
}
`
const Nav = styled.nav`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top:0;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  margin: 0 ;
  z-index: 1;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
  }
`
const Navbox = styled.div`
  display: flex;
  align-items: center;
  height:100%;

  @media (max-width: 768px) {
    color: black;
    flex-direction: column;
    position: fixed;
    width: 30%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const QuoteText = styled.div`
display: flex;
flex-direction: column;
color: white;
padding: 0px 20px;
text-align: center;
@media (max-width: 768px) {
    padding: 0px 20px;
  }

`

const BigText = styled.text`
font-size: 2rem;
@media (max-width: 1000px) {
  font-size: 1.5rem;
}
@media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
  `

const SmallText = styled.text`
font-size: 1.5rem;
margin: 1%;
@media (max-width: 1000px) {
  font-size: 1.2rem;
}
@media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
  }
`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: space-between;
`

const Col = styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
`
