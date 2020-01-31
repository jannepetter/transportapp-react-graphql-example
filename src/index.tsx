import React from 'react'		
import ReactDOM from 'react-dom'
import App from './App'  

import { ApolloProvider } from '@apollo/react-hooks'	//baseconfig
import { ApolloClient } from 'apollo-client'          //baseconfig
import { InMemoryCache } from 'apollo-cache-inmemory' //baseconfig
import { setContext } from 'apollo-link-context'      //baseconfig
import { createHttpLink } from "apollo-link-http";

import { split } from 'apollo-link'                   //subscription
import { WebSocketLink } from 'apollo-link-ws'        //subscription
import { getMainDefinition } from 'apollo-utilities'  //subscription

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,   //pass correct ws uri and reconnect true
  options: { reconnect: false }
})

const httplink=createHttpLink({ 
    uri:'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  credentials:''                        //'include'   if cookies  
}) 

const authLink = setContext((_, { headers }) => {
  const token = 'thisisyourtoken'
 
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
  wsLink,
  authLink.concat(httplink),
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')) 

 
 
