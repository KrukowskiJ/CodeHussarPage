import styled from "styled-components"
import * as React from "react"
import NavBar from "../components/NavBar"
import Team from "../components/Team"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// markup
const IndexPage = () => {
  return (
    <Page>
      <NavBar />
      <Team />
    </Page>
  )
}

export default IndexPage


const Page = styled.div`
margin : "0px";
padding : 0;
body: 0;
 marginTop: 0,
 

`