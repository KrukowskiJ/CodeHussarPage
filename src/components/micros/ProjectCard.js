import React from "react"
import styled from "styled-components"



export default function ProjectCard(props){
    const ProjectCardBack = styled.div`
    height:25vw;
    padding:2vw;
    `

    const Project = styled.img`
        height:100%;
        width:100%;
        background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 51.55%, rgba(255, 255, 255, 0) 100%);
        border-radius: 31px;
`
    return (
        <ProjectCardBack >
            <Project src={props.img} />
        </ProjectCardBack>
    );
}
