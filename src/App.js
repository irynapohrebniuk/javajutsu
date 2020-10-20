import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './hooks';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { LanguageContext } from './hooks'
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
import Footer from './components/footer'
import LanguageMenu from './components/langMenu';

const StyledNav = styled.nav`
  flex-basis: ${({ open }) => (open) ? '30%' : '0'};
  background: ${({ theme, open }) => (open) ? theme.primaryDark : theme.primaryLight};
  transition: background-color 0.5s ease-in-out;
  min-height: 100vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-basis: 100%;
    flex-direction: column;
    min-height: ${({ open }) => (open) ? '100vh' : '0'};
  }
`
const StyledContent = styled.div`
  flex-basis: ${({ open }) => (open) ? '70%' : '100%'};
  background-color: ${({ theme }) => theme.primaryLight};
  min-height: 90vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ open }) => (open) ? 'none' : 'flex'};
    flex-basis: 100%;
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

const StyledLangMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

function App() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('pl')
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (

    <ThemeProvider theme={theme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <GlobalStyles />
        <Router>
          <StyledContainer direction='row' open={open}>
            <StyledNav ref={node} open={open}>
              <Burger open={open} setOpen={setOpen} />
              <StyledLogo open={open}>
                <LogoIcon width='48' height='48' open={open} />
              </StyledLogo>
              <Menu open={open} setOpen={setOpen} />
            </StyledNav>
            <StyledLangMenu>
              <LanguageMenu />
            </StyledLangMenu>
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
          <Footer open={open} />
        </Router >
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}

export default App;
