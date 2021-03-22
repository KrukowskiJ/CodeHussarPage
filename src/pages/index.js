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
import Loader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
// markup

class IndexPage extends Component {
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(2000);
  }

  render() {
    if (this.state.loading) return <Loader color={"red"} css={override} size={100} />;

    return (
      <>
        <NavBar />
        <OurExpertise />
        <Team />
        <AboutUS />
        <Gallery />
        <Stopka />
      </>
    );
  }
}

const override = css`
position: absolute;
top:40%;
left: 40%;
`;

export default IndexPage

