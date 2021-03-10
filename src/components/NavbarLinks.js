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
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
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
      <NavLink to="/404">ABOUT US</NavLink>
      <NavLink to="/">EXPERTISE</NavLink>
      <NavLink to="/404">PROJECTS</NavLink>
      <NavLink to="/">CONTACT</NavLink>
      <NavLink to="/404">GALLERY</NavLink>
    </>
  )
}

export default NavbarLinks