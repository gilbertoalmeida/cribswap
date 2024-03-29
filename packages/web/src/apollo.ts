import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_SERVER_URL, // there are 2 env files, for dev and production
    credentials: "include"
  }),
  cache: new InMemoryCache()
});
