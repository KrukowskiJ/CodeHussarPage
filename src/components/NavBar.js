import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby"
import Team_pic from "../images/team1.svg"
import Logo_pic from "../images/Logo.png"
import BackNav from "../images/navbackground.svg"
import BackNav2 from "../images/navbackground2.svg"
import NavbarLinks from "./NavbarLinks"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [navbarHide, setNavbarHide] = useState(false)


  return (
    <>

      <BackImg
        alt="CodeHussarLogo"
        src={BackNav}
      />

      <Nav >
        {navbarHide ? null :
          <BackImg2
            alt="CodeHussarLogo"
            src={BackNav2}
          />}
        <Logo
          alt="CodeHussarLogo"
          src={Logo_pic}
          width="73px"
          height="82px"
        />


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
    </>
  )
}

export default NavBar

// styles
const BackImg = styled.img`
position: absolute;
height: auto; 
width: 100%;
`
const BackImg2 = styled.img`
top:0;
position: absolute;
z-index: -1;
flex: 1;
height: 10vh;
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
  background-color: white;
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
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
  background-color: white;
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
  background-color: white;
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
white-space: nowrap;
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
