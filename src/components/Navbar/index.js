import React from "react";
import { ContainerNav, Link } from "./styles";

const routes = [
  { to: "/people", children: "People" },
  { to: "/planets", children: "Planets" },
  { to: "/species", children: "Species" },
  { to: "/starships", children: "Starships" },
  { to: "/league", children: "My Galactic League" },
];

const Navbar = () => (
  <ContainerNav>
    {routes.map((route, i) => (
      <Link key={i} {...route} />
    ))}
  </ContainerNav>
);

export default Navbar;
