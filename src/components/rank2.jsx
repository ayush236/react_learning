import React,  {useContext} from 'react'
import { authcontext } from '../HOC/context'

function Rank2() {
    const {name}=useContext(authcontext)
    console.log(name)
  return (
    <div>
      ranks{name}
    </div>
  )
}

export default Rank2
