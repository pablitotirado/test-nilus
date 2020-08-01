import React from "react";
import { ContainerNav, Link } from "./styles";

const routes = [
  { to: "/peoples", children: "Peoples" },
  { to: "/planets", children: "Planets" },
  { to: "/species", children: "Species" },
  { to: "/starships", children: "Starships" },
  { to: "/league", children: "League" },
];

const Navbar = () => {
  return (
    <ContainerNav>
      {routes.map((route, i) => (
        <Link key={i} {...route} />
      ))}
    </ContainerNav>
  );
};

Navbar.defaultProps = {};
export default Navbar;
