import React from 'react'		
import ReactDOM from 'react-dom'
import App from './App'  

import { ApolloProvider } from '@apollo/react-hooks'	//baseconfig
import { ApolloClient } from 'apollo-client'          //baseconfig
import { InMemoryCache } from 'apollo-cache-inmemory' //baseconfig
import { createHttpLink } from "apollo-link-http";

const link=createHttpLink({ 
    uri:'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql'  
}) 

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')) 

 
 
