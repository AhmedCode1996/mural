import { createGlobalStyle } from "styled-components";
import { FONT_FAMILY } from "../constants";

const GlobalStyle = createGlobalStyle`
:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*,
*::before,
*:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


html, body {
    height: 100%;
}

html {
    font-family: ${FONT_FAMILY.inter};
}

body {
    line-height: 1.5;
}


img, svg {
    display: block;
    max-width: 100%;
    width: 100%;

}

input, button, select {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
}

h1, h2, h3, h4, h5, h6, p {
    overflow-wrap: break-word;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
