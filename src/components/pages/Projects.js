import React from 'react'
import ProjectBlock from '../projectBlock'
import StyledContainer from '../../styledComponents/containerStyled'
import { projects } from '../../db'

function Projects() {
  return (
    <div>
      <StyledContainer direction='column'>
        {
          projects.map((project, index) =>
            <div>
              <ProjectBlock
                title={project.title}
                info={project.info}
                tech={project.tech}
                links={project.links}
                key={'project_' + index}>
              </ProjectBlock>
              <img src={project.img} alt={project.title} width='392px' />
            </div>
          )
        }
      </StyledContainer>
    </div>
  )
}

export default Projects