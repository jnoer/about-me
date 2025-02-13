import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
      margin: 0;
  }
  body {
      --color-primary: #0D158D;
      // color-scheme: light dark;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
  }
  
  img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
  }
  
  input, button, textarea, select {
      font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
  }
  
  p {
      text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
      text-wrap: balance;
  }
  
  #root, #__next {
      isolation: isolate;
      width: 100%;
  }
  
  a {
    font-weight: 500;
    text-decoration: inherit;
  }
 
`;

export default GlobalStyles;