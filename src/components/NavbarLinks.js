import React, { useState } from "react"
import styled from "styled-components"
import { Link } from 'react-scroll';

const NavbarLinks = () => {
  return (
    <>
      <NavLink activeClass={"active"} spy={true} offset={-100} to="home" smooth duration={1000} >HOME</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="expertise" smooth duration={1000}>EXPERTISE</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="projects" smooth duration={1000}>PROJECTS</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="team" smooth duration={1000}>TEAM</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="about" smooth duration={1000}>ABOUT US</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="gallery" smooth duration={1000} > GALLERY</NavLink>
      <NavLink activeClass="active" spy={true} offset={-100} to="contact" smooth duration={1000} > CONTACT</NavLink>
    </>
  )
}

export default NavbarLinks


const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 2vw;
  padding-right: 5px;
  transition: all 0.2s ease-in;
  position: relative;
  font-size: 1.05em;
 
  cursor: pointer;

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

  :hover {
    text-decoration: none;
    color: white;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    font-size: 0.8em;
  }
  @media (max-width: 850px) {
    font-size: 0.7em;
  }
  @media (max-width: 768px) {
    display:none;
  }

`