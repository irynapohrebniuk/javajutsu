import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../hooks';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Menu from './menu'
import Burger from './burger'
import { StyledLogo } from '../../styledComponents/logo.styled'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Router>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <StyledLogo open={open} />
      </div>
      <Menu open={open} setOpen={setOpen} />
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
