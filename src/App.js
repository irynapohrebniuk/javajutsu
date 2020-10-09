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
import SubMenu from './components/submenu';

const StyledNav = styled.nav`
    align-content: center;
    flex-basis: 30%;
`
const StyledContent = styled.div`
    flex-basis: 70%;
    background-color: ${({ theme }) => theme.primaryLight};
    min-height: 100vh;
    align-content: center;
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
  z-index: 999;
`

function App() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const node = useRef()
  const menu = useRef()
  useOnClickOutside(node, () => setOpen(false))
  useOnClickOutside(menu, () => setVisible(true))

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledContainer direction='row' open = {open}>
          <StyledNav ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <StyledLogo open={open}>
              <LogoIcon width='48' height='48' open={open} />
            </StyledLogo>
            <Menu open={open} setOpen={setOpen} />
            
          </StyledNav>

          <StyledContent>
            <SubMenu open={open} visible={visible} />
            <Switch>
              <Route path="/projects/:slug?">
                <Projects open={open} />
              </Route>
              <Route path="/about">
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
