import React from 'react';
import gql from 'graphql-tag'
import { useQuery, useMutation, useSubscription, useApolloClient } from "@apollo/react-hooks"

const AGENCIES = gql`	
{
  agencies {
    id
    name
  }
}
`

const App: React.FC = () => {
  const agencies = useQuery(AGENCIES)
  console.log(agencies, 'check if workss')
  return (
    <div >
      hello
    </div>
  );
}

export default App;
