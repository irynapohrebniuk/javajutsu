import React from 'react'
import ProjectBlock from '../projectBlock'
import StyledContainer from '../../styledComponents/containerStyled'
import { projects } from '../../db'

function Projects() {
  return (
    <StyledContainer direction='column' position='absolute'>
      <div>
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
              <img src={project.imgMobile} alt={project.title} width='392px' />
            </StyledContainer>
          )
        }
      </div>
    </StyledContainer>

  )
}

export default Projects