import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectBlock from '../components/block'
import StyledContainer from '../styledComponents/container.styled'
import StyledPage from '../styledComponents/page.styled'
import { projects } from '../db'



const Projects = ({ open }) => {
  let { slug } = useParams();
  let filteredProjects = projects.filter(project => project.tech.includes(slug))
  let renderedProjects = (filteredProjects.length === 0)? projects : filteredProjects

  return (
    <StyledPage open={open}>
      {
        renderedProjects
          .map((project, index) =>
            <StyledContainer direction='row' key={'project' + index}>
              <ProjectBlock
                title={project.title}
                info={project.info}
                tech={project.tech}
                links={project.links}
              >
              </ProjectBlock>
              <img src={project.imgMobile} alt={project.title} width='392px' height='auto' key={'img' + index} />
            </StyledContainer>
          )
      }
    </StyledPage>
  )
}

export default Projects