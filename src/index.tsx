import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// add API to Apollo Client with authorization header
const client = new ApolloClient({
  uri: process.env.REACT_APP_HG_API_URL, 
  headers: {
    Authorization:
      `Bearer ${process.env.REACT_APP_HG_API_AUTH}` ||
      "",
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* add apollo client to context */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
