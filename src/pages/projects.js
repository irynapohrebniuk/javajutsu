import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectBlock from '../components/block'
import StyledContainer from '../styledComponents/container.styled'
import StyledSection from '../styledComponents/section.styled'
import SubMenu from '../components/submenu'
import { projects } from '../db'
import styled from 'styled-components'

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 60rem;
  flex-wrap: wrap;
  flex: auto;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  overflow: auto;
`

const Slide = styled.div`
  flex-basis: 12rem;
  height: 10rem;
  margin: 0.5rem;
  opacity: 0.5;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: right;
  color: ${({ theme }) => theme.primaryDark};
  background-image: url(${props => props.background});
  box-shadow: 8px 8px 6px -4px rgba(0, 0, 0, 0.19);
  :hover {
    opacity: 1;
  }
`

const LeftArrow = styled.div`
  height: 0;
  width: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-right: 2rem solid ${({ theme }) => theme.primaryDark};
  display: ${props => (props.disabled)? 'none' : 'block'}
`

const RightArrow = styled.div`
  height: 0;
  width: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-left: 2rem solid ${({ theme }) => theme.primaryDark};
  display: ${props => (props.disabled)? 'none' : 'block'}
`

const ProjectTitle = styled.div`
  padding: 0.5rem;
  background-color: ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryLight}
`

const Projects = ({ open }) => {
  const [active, setActive] = useState(0)

  let { slug } = useParams();
  let filteredProjects = projects.filter(project => project.tech.includes(slug))
  let renderedProjects = (filteredProjects.length === 0) ? projects : filteredProjects

  /* useEffect(() => {

  }, [active, filteredProjects]); */
  return (
    <StyledContainer direction="column" open={open}>
      <SubMenu open={open} />
      <Slider>
        <LeftArrow disabled =
            {(active === 0) 
            || filteredProjects.length === 1} 
            onClick = {() => setActive(active - 1)}
        />
        {
          renderedProjects
            .map((project, index) =>
              <Slide background={project.imgMobile}
                className={(index === active)? 'active' : ''}
                onClick={() => setActive(index)} key={'project' + index}>
                <ProjectTitle>{project.title}</ProjectTitle>
              </Slide>
            )
        }
        <RightArrow disabled={
            (active === filteredProjects.length - 1) 
            || filteredProjects.length === 1} 
            onClick = {() => setActive(active + 1)}/>
      </Slider>
      {(renderedProjects[active]) && (
        <StyledSection>
          <ProjectBlock
            title={renderedProjects[active].title}
            info={renderedProjects[active].info}
            tech={renderedProjects[active].tech}
            links={renderedProjects[active].links}
          >
          </ProjectBlock>
          <img src={renderedProjects[active].img} alt={renderedProjects[active].title} width='600px' height='auto' />
        </StyledSection>
      )

      }
    </StyledContainer>
  )
}

export default Projects