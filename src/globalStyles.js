import styled, { createGlobalStyle } from "styled-components";
import Image from "assets/starwars.png";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  background-image: url(${Image});
  background-position: center;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  color: white;
}
body {

}
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
