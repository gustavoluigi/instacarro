import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  font-size: 14px;
}

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #ebebeb;
   
  }

  img {
    max-width: 100%;
    height: auto;
  }

  :root {
    --green-default: #44B869;
  }
  
`;
