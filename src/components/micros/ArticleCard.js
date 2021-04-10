import React from "react"
import styled from "styled-components"

const ProjectCardBack = styled.div`
    height:25vh;
    padding:2vw;
    padding-bottom:1vw;
    justify-content:center;
    @media (max-width: 780px) {
  margin-top: 2%;
}

    `

const Project = styled.img`
    margin: auto;
    height:90%;
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