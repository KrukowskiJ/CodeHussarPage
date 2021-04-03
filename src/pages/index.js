import styled from "styled-components"
import React, { Component } from "react";
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
import { css } from "@emotion/core";
import Awards from '../components/Awards'
import Projects from '../components/Projects'
class IndexPage extends Component {

  render() {
    return (
      <>
        <NavBar />
        <OurExpertise />
        <Projects />
        <Team />
        <Awards />
        <AboutUS />
        <Gallery />
        <Stopka />
      </>
    );
  }
}

export default IndexPage

