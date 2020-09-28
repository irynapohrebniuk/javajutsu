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
import SubMenu from './components/submenu';
import LogoIcon from './components/logoIcon';

const StyledNav = styled.nav`
    align-content: center;
    flex-basis: 4rem;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-basis: 100%;
        padding: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) and (orientation: landscape) {
        flex-basis: 100%;
        padding: 2rem;
    }
`
const StyledContent = styled.div`
    position: absolute;
    top: 4rem;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.primaryLight};
    min-height: 100vh;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    left: 0;
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
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledContainer direction='row'>
          <StyledNav ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <StyledLogo open={open}>
              <LogoIcon width='48' height='48' open={open} />
            </StyledLogo>
            <Menu open={open} setOpen={setOpen} />
          </StyledNav>

          <StyledContent open={open}>
            <Switch>
              <Route path="/projects/:slug?">
                <SubMenu open={open} />
                <Projects open={open} />
              </Route>
              <Route path="/about">
                <About open={open} />
              </Route>
              <Route path="/contact">
                <Contact open={open} />
              </Route>
            </Switch>
            <Footer />
          </StyledContent>
        </StyledContainer>
      </Router >
    </ThemeProvider>
  )
}

export default App;
