import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counts = () => {
    var[nump,setNump]=useState(0)
    
   
  return (
    <div>
        <h1>number:{nump}</h1> 

        <Button onClick={()=>setNump(nump+1)}>+</Button>
        
        <Button onClick={()=>setNump(nump-1)}>-</Button>
        
    </div>
  )
}

export default Counts