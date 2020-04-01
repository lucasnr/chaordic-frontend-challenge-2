import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    color: #333;
    margin: 0px;
    padding: 0px;
  }

  body, input ,button {
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
