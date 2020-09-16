import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Menu from './menu'
import Burger from './burger'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      
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
