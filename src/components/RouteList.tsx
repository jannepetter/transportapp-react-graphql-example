import React, { useState } from 'react'
import '../css/RouteList.css'
import Route from './Route'
interface Props {
    agency: any
}

const RouteList: React.FC<Props> = (props) => {
    const [startingPoint,setStartingPoint]=useState('')
    const [destination,setDestination]=useState('')

    let showRoutes:any[]=[]
    

    if (props.agency.loading) {
        return (<div>loading</div>)
    }
    const routes=props.agency.data.agency.routes
    if(startingPoint.length>3 && destination.length>3){
        const filter=startingPoint.trim().concat(` - ${destination.trim()}`)
        showRoutes=routes.filter((r:any)=>r.longName.toLowerCase().includes(filter.toLowerCase()))
    }


    return (<div>
        <div className='header'>
        <input className='headerInput' onChange={(e)=>setStartingPoint(e.target.value)} placeholder='starting point'></input>
        <span>to</span>
        <input className='headerInput' onChange={(e)=>setDestination(e.target.value)} placeholder='destination'></input>
        </div>
        {showRoutes.map((r:any)=><Route key={r.gtfsId} route={r}></Route>)}

</div>)
}
export default RouteList