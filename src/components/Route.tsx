import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import shortid from 'shortid'
import '../css/Route.css'
import {ROUTE} from '../graphql/queries/ROUTE'

interface Props {
  route: any
}

const Route: React.FC<Props> = (props) => {
  const [showTrip, setShowTrip] = useState(false)
  const routeInfo = useQuery(ROUTE, {
    variables: { id: props.route.gtfsId }
  })

  const toggleShowtrip = () => {
    setShowTrip(!showTrip)
  }

  if (!showTrip || routeInfo.loading) {
    return (<div>
      <span onClick={toggleShowtrip}>{`${props.route.longName} ${props.route.shortName}`}</span><br></br>
    </div>)
  }
  const routti = routeInfo.data.route.trips

  const time = (seconds: number) => {
    let hours = String(Math.floor(seconds / (60 * 60))%24)
    let minutes = String((seconds % (60 * 60)) / 60)
    if (hours.length === 1) {
      hours = '0' + hours
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes
    }
    return `${hours}:${minutes}`
  }
  const handleNames =(name:string)=>{
    const part1=name.substring(0,1).toUpperCase()
    const part2=name.substring(1).toLowerCase()
    return part1.concat(part2)
  }

  const stopBuilder = (item: any, phase?: string) => {
    if (phase === 'first') {
      return `${handleNames(item.stop.name)} \t leaving ${time(item.scheduledDeparture)}`
    } else if (phase === 'last') {
      return `${handleNames(item.stop.name)} \t arrives ${time(item.scheduledArrival)}`
    }
    return `${handleNames(item.stop.name)} \t arrives ${time(item.scheduledArrival)}, leaves ${time(item.scheduledDeparture)} `
  }
  const showStops = (arr: any[]) => {
    return (<div className='stoplist' key={shortid.generate()}>
      <li className='listItem'>{stopBuilder(arr[0],'first')}</li>
      {arr.slice(1, arr.length - 1).map(s => <li className='listItem' key={shortid.generate()}>
        {stopBuilder(s)}</li>)}
        <li className='listItem'>{stopBuilder(arr[arr.length-1],'last')}</li>
      <br></br>
    </div>
    )

  }

  const showTrips = (arr: any[]) => {
    return (<div>
      {arr.map(t => showStops(t.stoptimes))}
    </div>
    )
  }
  return (<div className='canvas'>
    <span onClick={toggleShowtrip}>{`${props.route.longName} ${props.route.shortName}`}</span><br></br>
    {showTrips(routti)}
  </div>)
}
export default Route