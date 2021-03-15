import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import Team_pic from "../images/team1.svg"
import Logo_pic from "../images/Logo.png"
import BackNav from "../images/navbackground.png"
import NavbarLinks from "./NavbarLinks"




const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <>
      <BackImg
        alt="CodeHussarLogo"
        src={BackNav}
      />
      <Background>

        <Nav>
          <Logo
            alt="CodeHussarLogo"
            src={Logo_pic}
            width="73px"
            height="82px"
          />
          <LogoText><Col>
            <LogoText1>Code</LogoText1>
            <LogoText2>HussAR</LogoText2>
          </Col>
          </LogoText>
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox>
              <NavbarLinks />
            </Navbox>
          ) : (
            <Navbox open>
              <NavbarLinks />
            </Navbox>
          )}

        </Nav>
        <Row>
          <Team1
            alt="CodeHussar"
            src={Team_pic}
          />
          <QuoteText>
            <BigText>WORKING FOR A <b>BETTER</b> TOMMOROW</BigText>
            <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SmallText>
          </QuoteText>
        </Row>
      </Background>
    </>
  )
}

export default NavBar

// styles
const Background = styled.div`
/* position: absolute; */
/* height: 100%;  */
/* width: 100%;  */
/* top: 0px; */


`
const BackImg = styled.img`
position: absolute;
z-index: -5;
height: auto; 
width: 100%;
`

const Logo = styled.img`
display: flex;
justify-content:flex-end; 
height: auto; 
width: auto; 
max-width: 73px; 
max-height: 82px;
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
const LogoText = styled.text`
display: flex;
  height: 100%;
  align-items: center;
  color: white;
`
const LogoText1 = styled.text`

`
const LogoText2 = styled.text`
`
const Nav = styled.nav`
  position: relative;
  top:0;
  height: 10vh;
  display: flex;
 
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 ;
  z-index: 2;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    color: black;
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const QuoteText = styled.div`
display: flex;
flex-direction: column;
color: white;
margin: 10%;

`
const BigText = styled.text`
font-size: 2rem;

@media (max-width: 768px) {
    font-size: 1.5rem;
  }
  `
const SmallText = styled.text`
font-size: 1.5rem;
margin: 5%;
@media (max-width: 768px) {
    font-size: 1rem;
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
