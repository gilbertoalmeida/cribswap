import * as React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";
import { RegisterConnector } from "../modules/register/RegisterConnector";

export const Routes = () => (
  <NativeRouter>
    <Switch>
      {/* switch doesn't allow to render multiple routes, it renders the first one that matches */}
      <Route exact={true} path="/" component={RegisterConnector} />
    </Switch>
  </NativeRouter>
);
