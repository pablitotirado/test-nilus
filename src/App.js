import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContainer } from "./globalStyles";
import { Loading, Navbar } from "components";
import routes from "./routes";

const App = () => (
  <Suspense fallback={<Loading loading={true} />}>
    <AppContainer>
      <Navbar />
      {routes.map((route, i) => (
        <Route key={`${i}_${route.path}`} {...route} />
      ))}
    </AppContainer>
    <Redirect to="/peoples" />
  </Suspense>
);

export default App;
