import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectBlock from '../components/block'
import StyledContainer from '../styledComponents/container.styled'
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
  scroll-behavior: smooth;
`

const Slide = styled.div`
  border: ${({ theme }) => theme.primaryDark} solid 1px;
  flex-basis: 12rem;
  height: 10rem;
  margin: 0.5rem;
  opacity: 0.5;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: right;
  color: ${({ theme }) => theme.primaryDark};
  background-image: url(${props => props.background});
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
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const RightArrow = styled.div`
  height: 0;
  width: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-left: 2rem solid ${({ theme }) => theme.primaryDark};
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const ProjectTitle = styled.div`
  padding: 0.5rem;
  background-color: ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryLight}
`

const Projects = ({ open }) => {
  const [activeProject, setActiveProject] = useState(null)

  let { slug } = useParams();
  let filteredProjects = projects.filter(project => project.tech.includes(slug))
  let renderedProjects = (filteredProjects.length === 0) ? projects : filteredProjects

  useEffect(() => {

  }, [activeProject, filteredProjects]);
  return (
    <>
      <Slider>
        <LeftArrow />
        {
          renderedProjects
            .map((project, index) =>
              <Slide background={project.imgMobile}
                onClick={() => setActiveProject(project)} key={'project' + index}>
                <ProjectTitle>{project.title}</ProjectTitle>
              </Slide>
            )
        }
        <RightArrow />
      </Slider>
      {(activeProject) && (
        <StyledContainer direction='row'>
          <ProjectBlock
            title={activeProject.title}
            info={activeProject.info}
            tech={activeProject.tech}
            links={activeProject.links}
          >
          </ProjectBlock>
          <img src={activeProject.imgMobile} alt={activeProject.title} width='392px' height='auto' />
        </StyledContainer>
      )

      }
    </>
  )
}

export default Projects