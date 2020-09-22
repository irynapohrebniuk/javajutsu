import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './hooks';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Menu from './components/menu'
import Burger from './components/burger'
import Projects from './pages/projects'
import Contact from './pages/contact'
import About from './pages/about'
import StyledContainer from './styledComponents/container.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from './styledComponents/theme'
import { GlobalStyles } from './styledComponents/global'
import Footer from './components/footer'
import styled from 'styled-components'

const StyledNav = styled.nav`
    /* display: flex; */
    /* width: 30%; */
    align-content: center;
    min-height: 100vh;
`

const StyledContent = styled.div`
    position: absolute;
    left: ${({ open }) => open ? '20rem;' : '7rem;'};
    flex-grow: 1;
    background-color: ${({ theme }) => theme.primaryDark};
    width: 100%;
    min-height: 100vh;
`


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledContainer position='relative' direction='column'> 
          <StyledNav ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </StyledNav>
          <StyledContent open={open}>
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
            </Switch>
          </StyledContent>
        </StyledContainer>
      </Router >
      <Footer />
    </ThemeProvider>
  )
}


export default App;
