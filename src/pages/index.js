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
import MobileApp from '../components/MobileApp'
import WebApp from '../components/WebApp'

export default () => {

  const MobileStatus = useMediaQuery({ query: `(max-width: 768px)` });

  if(MobileStatus===false){
    return <WebApp />
  }else{
    return <MobileApp />
  }
}




