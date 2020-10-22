import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    font-family: Roboto, sans-serif;
    min-height: 100vh;
    justify-content: left;
    font-size: 16px;
  }
  

  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    align-content: stretch;
    background-color: grey;
  }
  
  .java {
    font: bold 22px Roboto, sans-serif;
    fill: red;
  }

  .jutsu {
    font: bold 26px Roboto, sans-serif;
  }

  .j {
    font: 45px Roboto, sans-serif;
  }

  .active {
    opacity: 1;
  }

  a {
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }
`