import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 2vw;
  transition: all 0.2s ease-in;
  position: relative;
  

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    text-decoration: none;
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: black;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/#about">ABOUT US</NavLink>
      <NavLink to="/#expertise">EXPERTISE</NavLink>
      <NavLink to="#projects">PROJECTS</NavLink>
      <NavLink to="/#contact">CONTACT</NavLink>
      <NavLink to="/#gallery">GALLERY</NavLink>
    </>
  )
}

export default NavbarLinks