import gql from 'graphql-tag'
export const AGENCY = gql`	
{
  agency(id:"MATKA:VR") {
    routes{
      gtfsId
      longName
      shortName
    }
  }
}
`