import React from 'react'
import { StyledInfo } from '../styledComponents/info.styled'
import { StyledTech } from '../styledComponents/tech.styled'
import { StyledProjectLink } from '../styledComponents/projectLink.styled'
import styled from 'styled-components'

const StyledBlock = styled.div`
  flex-direction: row;
`;


const StyledProjectList = styled.ul`
  list-style-type: square;
`

const StyledProjectListItem = styled.li`
  display: block;
  &::before {
  content: "\2022";
  color: ${({ theme }) => theme.primaryLight};
  }
`

const ProjectBlock = (props) => {
    let {github, firebase} = props.links
    return (
        <StyledBlock>
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
        </StyledBlock>
    )
}

export default ProjectBlock