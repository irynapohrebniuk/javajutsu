import React from 'react'
import { StyledProjectBlock } from '../styledComponents/projectBlockStyled'
import { StyledInfo } from '../styledComponents/infoStyled'
import { StyledTech } from '../styledComponents/techStyled'
import { StyledProjectLink } from '../styledComponents/projectLinkStyled'

const ProjectBlock = (props) => {
    
    return (
        <StyledProjectBlock>
            <h2>{props.title}</h2>
            <StyledInfo><h2>Info:</h2> {props.info} </StyledInfo>
            <StyledTech><h2>Technologies:</h2> {props.tech} </StyledTech>
            <StyledProjectLink><h2>Github:</h2> {props.links} </StyledProjectLink>
            <StyledProjectLink><h2>Demo:</h2> {props.links} </StyledProjectLink>
        </StyledProjectBlock>
    )
}

export default ProjectBlock