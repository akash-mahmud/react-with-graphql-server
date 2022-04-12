import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/layout.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache,  HttpLink } from "@apollo/client/core";
import {ApolloProvider} from "@apollo/client/react";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8000/graphql"
  }),

})
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
