import React, {Link} from 'react'
import { StyledProjectBlock, StyledProjectList, StyledProjectListItem } from '../styledComponents/projectBlockStyled'
import { StyledInfo } from '../styledComponents/infoStyled'
import { StyledTech } from '../styledComponents/techStyled'
import { StyledProjectLink } from '../styledComponents/projectLinkStyled'

const ProjectBlock = (props) => {
    let {github, firebase} = props.links
    return (
        <StyledProjectBlock>
            <h1>{props.title}</h1>
            <StyledInfo> {props.info} </StyledInfo>
            <StyledTech>
                <h2>Technologies:</h2> 
                <StyledProjectList>
                     {props.tech.map((item, index) => <StyledProjectListItem key={'tech_'+index}>{item}</StyledProjectListItem>)}
                </StyledProjectList>
            </StyledTech>
            <StyledProjectLink><h2>Github:</h2>  {github} </StyledProjectLink>
            <StyledProjectLink><h2>Demo:</h2> {firebase}</StyledProjectLink>
        </StyledProjectBlock>
    )
}

export default ProjectBlock