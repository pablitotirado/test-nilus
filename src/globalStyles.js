import styled, { createGlobalStyle } from "styled-components";
import Image from "assets/starwars.png";

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    background-image: url(${Image});
    background-position: center;

    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerCenter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
