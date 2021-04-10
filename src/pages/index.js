import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Team from "../components/Team"
import OurExpertise from "../components/OurExpertise"
import AboutUS from "../components/AboutUS"
import "../styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "../components/Gallery"
import Stopka from "../components/Stopka"
import Awards from '../components/Awards'
import Projects from '../components/Projects'
import { push as Menu } from 'react-burger-menu'
import NavbarLinksMobile from "../components/NavbarLinksMobile"
import { useMediaQuery } from 'react-responsive';



export default () => {

  const MobileStatus = useMediaQuery({ query: `(max-width: 768px)` });


  return (
    <>
      <div id="outer-container">
        {MobileStatus ? <Menu right pageWrapId={"page-wrap"} styles={styles} width={'50%'}><NavbarLinksMobile /></Menu> : null}
        <main id="page-wrap">
          <NavBar />
          <OurExpertise />
          <Projects />
          <Team />
          <Awards />
          <AboutUS />
          <Gallery />
          <Stopka />
        </main>
      </div>
    </>
  );

}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '22px',
    left: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'white'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#d72b2b',
    padding: '1em 2em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#d72b2b'
  },
  bmItemList: {
    padding: '1em'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'transparent'
  }
}

