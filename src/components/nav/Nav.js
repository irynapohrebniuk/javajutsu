import React from 'react'
import styled from 'styled-components'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
        } from "react-router-dom"
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import About from '../pages/About'

const NavList = styled.ul`
  display: block;
  background: green;
  cursor: pointer;
`
const NavItem = styled.li`
  display: block;
  color: gray
`

const navItemsNames = ['Projects', 'About', 'Contact']

const NavItems = (props) => {
  const items = props.items.map((item) => <NavItem><Link to={item}>{item}</Link></NavItem>)
  return items
}

function Nav() {
  return (
    <Router>
      <NavList>
        <NavItems items={navItemsNames}></NavItems>
      </NavList>
      <Switch>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        
      </Switch>
    </Router >
    
  );
}

export default Nav;
