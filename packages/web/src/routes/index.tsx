import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "../modules/register/RegistorConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* switch doesn't allow to render multiple routes, it renders the first one that matches */}
      <Route exact={true} path="/register" component={RegisterConnector} />
    </Switch>
  </BrowserRouter>
);
