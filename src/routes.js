import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Details = lazy(() => import("pages/Details"));
const League = lazy(() => import("pages/League"));

export default [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: Details,
    path: "/details",
    exact: true,
  },
  {
    component: League,
    path: "/league",
    exact: true,
  },
];
