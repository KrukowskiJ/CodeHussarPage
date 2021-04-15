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
import { slide as Menu } from 'react-burger-menu'
import NavbarLinksMobile from "../components/NavbarLinksMobile"
import { useMediaQuery } from 'react-responsive';
import ReactLoading from 'react-loading';
import styled from "styled-components"


export default () => {
  const MobileStatus = useMediaQuery({ query: `(max-width: 768px)` });
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
    setTimeout(() => setLoading2(false), 1)
  }, [])

  // if(MobileStatus===false){
  return (
    <>
      {loading === false ?
        null
        :
        <LoadBox>
          <ReactLoading delay={1} type={"bars"} color={"#990000"} height={200} width={100} />
        </LoadBox>
      }
      {loading2 === false ?
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
        </div> : null}

    </>
  )
}

const LoadBox = styled.div`
    z-index:200;
    width: 100vw;
    height: 500px;	
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    padding-bottom:500px;
    padding-top:500px;
    justify-content:center;
    display:flex;
  `



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

