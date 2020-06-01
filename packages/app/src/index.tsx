import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import { Routes } from "./Routes/index";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
