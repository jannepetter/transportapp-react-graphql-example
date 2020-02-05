import React from 'react';
import { useQuery } from "@apollo/react-hooks"
import RouteList from './components/RouteList'
import {AGENCY} from './graphql/queries/AGENCY'

const App: React.FC = () => {
  const agency = useQuery(AGENCY)
  return (
    <div >
      <RouteList agency={agency}></RouteList>
    </div>
  );
}

export default App;
