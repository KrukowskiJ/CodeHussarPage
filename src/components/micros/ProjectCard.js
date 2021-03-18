import React from "react"
import styled from "styled-components"

const ProjectCardBack = styled.div`
    flex:1;
    height: 30vh;
    width: 20vw;
    margin: auto;
   
    `

const Project = styled.img`
    height: 100%;
    width: auto;
    display: block;
    margin: auto;

`

const ProjectCard = (props) => {
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}

export default ProjectCard;