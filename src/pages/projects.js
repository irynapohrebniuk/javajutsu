import React from 'react'
import ProjectBlock from '../components/block'
import StyledContainer from '../styledComponents/container.styled'
import StyledPage from '../styledComponents/page.styled'
import { projects } from '../db'

function Projects() {
  return (
    
      <StyledPage>
        {
          projects.map((project, index) =>
            <StyledContainer direction='row' position='relative'>
              <ProjectBlock
                title={project.title}
                info={project.info}
                tech={project.tech}
                links={project.links}
                key={'project_' + index}
                >
              </ProjectBlock>
              <img src={project.imgMobile} alt={project.title} width='392px' height='auto' />
            </StyledContainer>
          )
        }
      </StyledPage>
  )
}

export default Projects