import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <ApolloProvider
      client={client}
      // apolloprovider allows to do graphql requests from anywhere in the app
    >
      <Routes />
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById("root")
);

/* 
I am not running strict mode bc I was getting always a console warning
index.js:1 Warning: findDOMNode is deprecated in StrictMode.
This is still to be fixed, so until then I am not running in strict
bc the warning is annoying


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider
      client={client}
      // apolloprovider allows to do graphql requests from anywhere in the app
    >
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
