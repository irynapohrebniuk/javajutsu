import React from 'react'
import { StyledProjectBlock } from '../styledComponents/projectBlockStyled'
import { StyledInfo } from '../styledComponents/infoStyled'
import { StyledTech } from '../styledComponents/techStyled'
import { StyledProjectLink } from '../styledComponents/projectLinkStyled'

const ProjectBlock = (info, tech, links) => {
    
    return (
        <StyledProjectBlock>
            First Project
            <StyledInfo><h2>Info:</h2> {info} </StyledInfo>
            <StyledTech><h2>Techologies:</h2> {tech} </StyledTech>
            <StyledProjectLink><h2>Github:</h2> {links} </StyledProjectLink>
            <StyledProjectLink><h2>Demo:</h2> {links} </StyledProjectLink>
        </StyledProjectBlock>
    )
}

export default ProjectBlock