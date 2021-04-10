import React, { useState } from "react"
import styled from "styled-components"
import { Link } from 'react-scroll';

const NavbarLinks = () => {
  return (
    <Nav>
      <NavLink activeClass="active" spy={true} offset={-100} to="home" smooth duration={1000}>HOME</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="expertise" smooth duration={1000}>EXPERTISE</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="projects" smooth duration={1000}>PROJECTS</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="team" smooth duration={1000}>TEAM</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="about" smooth duration={1000}>ABOUT US</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="gallery" smooth duration={1000} > GALLERY</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="contact" smooth duration={1000} > CONTACT</NavLink>
    </Nav>
  )
}

export default NavbarLinks

const Nav = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-content: space-between;
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  white-space: nowrap;
  z-index:666;
  margin-right: -100px;
  transition: all 0.2s ease-in;
  position: relative;
  font-size: 1em;
  padding: 3px;
  font-size: 1em;
  cursor: pointer;
  min-width:150px;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: white;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  
  

`