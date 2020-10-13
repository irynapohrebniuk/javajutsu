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
import styled from 'styled-components'
import LogoIcon from './components/logoIcon';

const StyledNav = styled.nav`
  flex-basis: ${({ open }) => (open)? '30rem' : '0rem'};
  width: ${({ open }) => (open)? '30rem' : '0rem'};
  background: ${({ theme, open }) => (open)? theme.primaryDark : theme.primaryLight};
  transition: background-color 0.5s ease-in-out;
  min-height: 100vh;
`
const StyledContent = styled.div`
  flex-basis: ${({ open }) => (open)? 'auto' : '100%'};
  background-color: ${({ theme }) => theme.primaryLight};
  margin-top: 2rem;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 100%;
    flex-direction: column;
  }
`
const StyledLogo = styled.div`
  position: absolute;
  left: 6rem;
  top: 1rem;
  width: 64px;
  z-index: 100;
`

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledContainer direction='row' open = {open}>
          <StyledNav ref={node} open = {open}>
            <Burger open={open} setOpen={setOpen} />
            <StyledLogo open={open}>
              <LogoIcon width='48' height='48' open={open} />
            </StyledLogo>
            <Menu open={open} setOpen={setOpen} />
          </StyledNav>

          <StyledContent open={open}>
            <Switch>
              <Route path="/projects/:slug?">
                <Projects open={open} />
              </Route>
              <Route path="/about">
                <About open={open} />
              </Route>
              <Route path="/" exact>
                <About open={open} />
              </Route>
              <Route path="/contact">
                <Contact open={open} />
              </Route>
            </Switch>
          </StyledContent>
        </StyledContainer>
      </Router >
    </ThemeProvider>
  )
}

export default App;
