import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
body{
    max-width: 1200px;
    min-width: 800px;
    width: 100%;
    margin: 0 auto;
}
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
input:focus {
  outline: none;
}

button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
`;
