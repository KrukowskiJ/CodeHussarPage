import React from "react"
import styled from "styled-components"

const ProjectCardBack = styled.div`
    height:15vh;
    padding:1vw;
    justify-content:center;
    `

const Project = styled.img`
    margin: auto;
    height:100%;
    width:auto;
    text-align:center;
`

const ProjectCard = (props) => {
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}

export default ProjectCard;