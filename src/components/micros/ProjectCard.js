import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ProjectCardBack = styled.div`
    align-self:center;
    flex:1;
    justify-content: "center";
    `

const Project = styled.img`
    height: 20vw;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;

`

const ProjectCard = (props) => {
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}

export default ProjectCard;