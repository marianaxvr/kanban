import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Poppins', sans-serif;
    background: #061325;
    color: #ffffff;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;