import Home from "pages/Home";
import Details from "pages/Details";
import League from "pages/League";
import Planets from "pages/Planets";
import Species from "pages/Species";
import Starships from "pages/Starships";

export default [
  {
    component: Home,
    path: "/people",
    exact: true,
  },
  {
    component: Details,
    path: "/details",
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
