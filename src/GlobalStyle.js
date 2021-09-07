import { createGlobalStyle } from 'styled-components';

import NunitoWoff from "./resources/fonts/nunito-v16-latin-regular.woff";
import NunitoWoff2 from "./resources/fonts/nunito-v16-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoWoff2}) format('woff2'), /* Super Modern Browsers */
    url(${NunitoWoff}) format('woff');
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Nunito,sans-serif;
    background-color: #fff;
    color: #000;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  p {
    margin: 0;
  }
  
  a {
    color: rgb(33, 150, 243);
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
