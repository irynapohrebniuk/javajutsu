import React from 'react'
import StyledContainer from '../styledComponents/container.styled'

const About = ({ open }) => {
  
  return (
    <StyledContainer open={open} direction='column' justifyContent='center' top='2rem'>
      <h2>Hi, I'm Iryna and I'm a web developer.</h2>
      <h4>I'm passionate and motivated, flexible team member with aspiration to learn.</h4>
      <h4>Now I'm looking for new opportunities.</h4>
      <h3>My projects you can find on GitHub</h3>
    </StyledContainer>
  )
}

export default About