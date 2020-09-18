import React from 'react'
import ProjectBlock from '../projectBlock'

const projectsDB = [
  {
    'id': 1,
    'title': 'Currency Converter',
    'info': '',
    'tech': ['Angular', 'HTML', 'CSS', 'SASS', 'JS'],
    'links': ['github.com/irynapohrebniuk/, firebase.com/irynapohrebniuk/']
  },
  {
    'id': 2,
    'title': 'Currency Converter',
    'info': '',
    'tech': ['Angular', 'HTML', 'CSS', 'SASS', 'JS'],
    'links': ['github.com/irynapohrebniuk/, firebase.com/irynapohrebniuk/']
  },
  {
    'id': 2,
    'title': 'Currency Converter',
    'info': '',
    'tech': ['Angular', 'HTML', 'CSS', 'SASS', 'JS'],
    'links': ['github.com/irynapohrebniuk/, firebase.com/irynapohrebniuk/']
  }
]

function Projects() {
    return (
      projectsDB.map((project) => <ProjectBlock title={project.title} info={project.info} tech={project.tech} links={project.links} />)    
    )
  }

export default Projects