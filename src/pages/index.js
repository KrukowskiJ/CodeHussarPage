import styled from "styled-components"
import * as React from "react"
import NavBar from "../components/NavBar"
import Team from "../components/Team"
import OurExpertise from "../components/OurExpertise"
import "../styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// markup
const IndexPage = () => {
  return (
    <>
      <NavBar />
      <OurExpertise />
      <Team />
    </>
  )
}

export default IndexPage

