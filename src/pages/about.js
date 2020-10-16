import React from 'react'
import StyledSection from '../styledComponents/section.styled'

const About = ({open}) => (
  <StyledSection direction="column" top="4rem" open={open}>
    <div>Hi, I'm Iryna and I'm a web developer.</div>
    <div>I'm passionate and motivated, flexible team member with aspiration to learn.</div>
    <div>Now I'm looking for new opportunities.</div>
    <div>My projects you can find on GitHub</div>
  </StyledSection>
)

export default About