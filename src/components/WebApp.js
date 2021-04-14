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

const LoadBox=styled.div`
  z-index:200;
	width: 100px;
	height: 100px;	
    position:absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
`

export default ()=>{

    const MobileStatus=false;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
      }, [])


    return(
        <>
        {loading===false  ? (
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
        ):(
          <LoadBox>
             <ReactLoading type={"bars"} color={"#990000"} height={200} width={100} />
          </LoadBox>
        )}
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