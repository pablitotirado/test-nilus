import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContainer } from "./globalStyles";
import { Navbar } from "components";
import routes from "./routes";

const App = () => (
  <>
    <AppContainer>
      <Navbar />
      {routes.map((route, i) => (
        <Route key={`${i}_${route.path}`} {...route} />
      ))}
    </AppContainer>
    <Redirect to="/league" />
  </>
);

export default App;
