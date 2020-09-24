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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100vh;
    justify-content: left;
    font-size: 16px;
  }
  

  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    /* margin: 0 auto; */
    min-height: 100vh;
    align-content: stretch;
    background-color: grey;
  }
  `