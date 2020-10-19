import React from 'react'
import StyledSection from '../styledComponents/section.styled'

const About = ({open}) => (
  <StyledSection direction="column" top="4rem" open={open}>
    <h3>Hi, I'm Iryna and I'm a web developer.</h3>
    <h4>I'm passionate and motivated, flexible team member with aspiration to learn.</h4>
    <h4>Now I'm looking for new opportunities.</h4>
    <h4>My projects you can find on  <a href='https://github.com/irynapohrebniuk'>GitHub</a></h4>
  </StyledSection>
)

export default About