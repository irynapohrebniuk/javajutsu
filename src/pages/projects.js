import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectBlock from '../components/projectBlock'
import StyledContainer from '../styledComponents/container.styled'
import StyledSection from '../styledComponents/section.styled'
import SubMenu from '../components/submenu'
import StyledResponsiveImg from '../styledComponents/responsiveImg.styled'
import StyledImageBlock from '../styledComponents/imageBlock.styled'
import { projects } from '../db'
import styled from 'styled-components'
import { LanguageContext } from '../hooks'

const Slider = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 60rem;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: nowrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 100%;
    flex-basis: 100%;
  }
`

const Slide = styled.div`
  flex-basis: 15%;
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
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-basis: 80%;
    min-width: 80%;
    flex-direction: column;
  }
`
const SliderBody = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`

const LeftArrow = styled.div`
  flex-basis: 5%;
  height: 0;
  width: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-right: 2rem solid ${({ theme }) => theme.primaryDark}; 
  z-index: ${props => (props.disabled) ? '-5' : '100'};
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const RightArrow = styled.div`
  flex-basis: 5%;
  height: 0;
  width: 0;
  border-top: 2rem solid transparent;
  border-bottom: 2rem solid transparent;
  border-left: 2rem solid ${({ theme }) => theme.primaryDark};
  z-index: ${props => (props.disabled) ? '-5' : '100'};
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`

const ProjectTitle = styled.div`
  padding: 0.5rem;
  background-color: gray;
  color: ${({ theme }) => theme.primaryLight}
`

const Projects = ({ open }) => {
  const [active, setActive] = useState(0)
  let { language, } = useContext(LanguageContext)
  let { slug } = useParams();
  let filteredProjects = projects.filter(project => project.tech.includes(slug))
  let renderedProjects = (filteredProjects.length === 0) ? projects : filteredProjects
  let activeProject = renderedProjects[active]
  useEffect(() => {

  }, [active, filteredProjects, renderedProjects])
  return (
    <StyledContainer direction="column" open={open}>
      <SubMenu open={open} />
      <Slider>
        <LeftArrow disabled=
          {(active === 0)
            || filteredProjects.length === 1}
          onClick={() => setActive(active - 1)}
        />
        <SliderBody>
          {
            renderedProjects
              .map((project, index) =>
                <Slide background={project.imgMobile}
                  className={(index === active) ? 'active' : ''}
                  onClick={() => setActive(index)} key={'project' + index}>
                  <ProjectTitle>{project[language].title}</ProjectTitle>
                </Slide>
              )
          }
        </SliderBody>

        <RightArrow disabled={
          (active === (renderedProjects.length - 1))
          || filteredProjects.length === 1}
          onClick={() => { if (active < renderedProjects.length - 1) setActive(active + 1) }} />
      </Slider>
      {(renderedProjects[active]) && (
        <StyledSection direction='column'>
          <ProjectBlock
            title={activeProject[language].title}
            info={activeProject[language].info}
            tech={activeProject.tech}
            links={activeProject.links}
          >
          </ProjectBlock>
          <StyledImageBlock>
            <StyledResponsiveImg src={activeProject.img} alt={activeProject[language].title} />
          </StyledImageBlock>

        </StyledSection>
      )}
    </StyledContainer>
  )
}

export default Projects