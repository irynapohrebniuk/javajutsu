import React, { useContext } from 'react'
import StyledSection from '../styledComponents/section.styled'
import Girl from '../img/svg-components/girl-laptop.svg'
import StyledResponsiveImg from '../styledComponents/responsiveImg.styled'
import styled from 'styled-components'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import GithubIcon from '../components/githubIcon'
import { about } from '../db'
import { LanguageContext } from '../hooks'

const CenterDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Div = styled.div`
  margin-left: 1rem;
`

const About = ({ open }) => {

  const {language, } = useContext(LanguageContext)

  return (
    <StyledSection direction="row" alignItems="center" open={open} justifyContent="center" top="4rem">
      <StyledSection direction="column">
        <h2>{about[language].about_body}</h2>
        <CenterDiv>
          <Link to='/projects'><Button>See my projects</Button></Link>
        </CenterDiv>
        <StyledSection direction="row">
          <h2>My projects on </h2>
          <Div><a href='https://github.com/irynapohrebniuk'><GithubIcon height='48' width='48' /></a></Div>
        </StyledSection>
      </StyledSection>
      <StyledSection>
        <StyledResponsiveImg src={Girl} alt="Girl-illustration" width="50%" />
      </StyledSection>
    </StyledSection>
  )
}

export default About