import React from "react"
import styled from "styled-components"



export default function ProjectCard(props) {
    const ProjectCardBack = styled.div`
        padding:3vw;
    `

    const Project = styled.img`
        height:80%;
        width:80%;
        background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 51.55%, rgba(255, 255, 255, 0) 100%);
        border-radius: 31px;
`
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}
