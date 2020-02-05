import gql from 'graphql-tag'
export const ROUTE = gql`
query route($id:String!){
  route(id:$id){
    trips {
      stoptimes {
        stop{
          name
          platformCode
        }
        scheduledArrival
        scheduledDeparture
        arrivalDelay
      }
    }
  }
}
`