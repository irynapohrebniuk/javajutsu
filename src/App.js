import React from 'react'
import Nav from './components/nav/nav'
import { ThemeProvider } from 'styled-components'
import { theme } from './styledComponents/theme'
import { GlobalStyles } from './styledComponents/global'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
      </>
    </ThemeProvider>
  )
}


export default App;
