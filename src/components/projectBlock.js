import React from 'react'
import { StyledInfo } from '../styledComponents/info.styled'
import { StyledTech } from '../styledComponents/tech.styled'
import { StyledProjectLink } from '../styledComponents/projectLink.styled'
import styled from 'styled-components'
import FirebaseIcon from './firebaseIcon'
import GithubIcon from './githubIcon'
import StyledContainer from '../styledComponents/container.styled'

const StyledBlock = styled.div`
  flex-basis: 30rem;
  flex-direction: row;
`;

const StyledProjectList = styled.ul`
  list-style-type: square;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const StyledProjectListItem = styled.li`
  padding: 5px;
  &::before {
  content: "\2022";
  color: ${({ theme }) => theme.primaryDark};
  }
`
const ExtLink = styled.a`
  text-decoration: none;
  padding: 0.5rem;
`

const ProjectBlock = (props) => {
  let { github, firebase } = props.links
  return (
    <StyledBlock direction='column'>
      <h1>{props.title}</h1>
      <StyledInfo> {props.info} </StyledInfo>

      <StyledTech>
        <h3>Technologies:</h3>
        <StyledProjectList>
          {props.tech.map((item, index) =>
            <StyledProjectListItem key={'tech_' + index}>
              {item}
            </StyledProjectListItem>)}
        </StyledProjectList>
      </StyledTech>

      <StyledProjectLink>
        <h3>Repository:</h3>
        <StyledContainer alignItems='center'>
          <div><GithubIcon height='48' width='48' /></div>
          <div><ExtLink href={github} target='_blank' rel="noopener">{github}</ExtLink></div>
        </StyledContainer>
      </StyledProjectLink>

      <StyledProjectLink>
        <h3>Demo:</h3>
        <StyledContainer alignItems='center'>
          <div><FirebaseIcon height='48' width='48' /></div>
          <div><ExtLink href={firebase} target='_blank' rel="noopener">{firebase}</ExtLink></div>
        </StyledContainer>
      </StyledProjectLink>

    </StyledBlock>
  )
}

export default ProjectBlock