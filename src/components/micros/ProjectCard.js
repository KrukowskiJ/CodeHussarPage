import React from "react"
import styled from "styled-components"

const ProjectCardBack = styled.div`
    height:25vw;
    padding:2vw;
    `

const Project = styled.img`
    height:100%;
    width:100%;
`

const ProjectCard = (props) => {
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}

export default ProjectCard;