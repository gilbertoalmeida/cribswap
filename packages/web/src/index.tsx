import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import { Routes } from "./routes";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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
