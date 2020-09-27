import React from 'react'
import ProjectBlock from '../components/block'
import { projects } from '../db'
import StyledContainer from '../styledComponents/container.styled'
import StyledPage from '../styledComponents/page.styled'

const Filter = (props) => {
    return (
        <StyledPage open={props.open}>
            {
                projects
                    .filter(project => project.tech.includes(props.match.params.criteria))
                    .map((project, index) =>
                        <StyledContainer key={'project_' + index} direction='row'>
                            <ProjectBlock
                                title={project.title}
                                info={project.info}
                                tech={project.tech}
                                links={project.links}
                            >
                            </ProjectBlock>
                            <img src={project.imgMobile} alt={project.title} width='392px' height='auto' />
                        </StyledContainer>)
                        
           }
        </StyledPage>
    )
}

export default Filter