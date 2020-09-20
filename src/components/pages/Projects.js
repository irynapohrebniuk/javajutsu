import React from 'react'
import ProjectBlock from '../projectBlock'
import StyledContainer from '../../styledComponents/containerStyled'
import projectsDB from '../../projectsDB'

function Projects() {
    return (
      <StyledContainer>
        {
          projectsDB.map((project) => <ProjectBlock title={project.title} info={project.info} tech={project.tech} links={project.links} />)
        }
      </StyledContainer>    
    )
  }

export default Projects