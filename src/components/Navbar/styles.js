import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background: #ccc;
  border: 1px solid gray;
  .active {
    color: #e48942;
    border-right: 2px solid #e48942;
    border-left: 2px solid #e48942;
  }
  padding: 0.5rem 0;
`;

export const Link = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  padding: 1rem 2rem;
  border-right: 1px solid #40496c;
  border-left: 1px solid #40496c;
  color: #40496c;
  text-decoration: none;
`;
