import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Details = lazy(() => import("pages/Details"));
const League = lazy(() => import("pages/League"));
const Planets = lazy(() => import("pages/Planets"));
const Species = lazy(() => import("pages/Species"));
const Starships = lazy(() => import("pages/Starships"));

export default [
  {
    component: Home,
    path: "/peoples",
    exact: true,
  },
  {
    component: Details,
    path: "/details:item",
    exact: true,
  },
  {
    component: League,
    path: "/league",
    exact: true,
  },
  {
    component: Planets,
    path: "/planets",
    exact: true,
  },
  {
    component: Species,
    path: "/species",
    exact: true,
  },
  {
    component: Starships,
    path: "/starships",
    exact: true,
  },
];
