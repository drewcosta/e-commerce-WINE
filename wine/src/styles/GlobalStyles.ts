import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-family: "Lato", sans-serif;
  }

  button, input, textarea {
    -webkit-font-smoothing: antialiased;
    font-family: "Lato", sans-serif;
  }
`