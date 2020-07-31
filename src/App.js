import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import routes from "./routes";

const App = () => (
  <Suspense fallback={<BounceLoader color="red" />}>
    {routes.map((route, i) => (
      <Route key={`${i}_${route.path}`} {...route} />
    ))}
    <Redirect to="/" />
  </Suspense>
);

export default App;
