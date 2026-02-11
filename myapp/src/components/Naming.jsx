import { Button } from '@mui/material'
import React, { useState } from 'react'
import { use } from 'react'

const Naming = () => {
  var [name, setName] = useState("all")

  const inpt1=()=>{
    setName("React")
  }
  const inpt2=()=>{
    setName("Angular")
  }
  const inpt3=()=>{
    setName("Flutter")
  }

  return (
    <div>
      <h1>Welcome: {name}</h1>

      <Button variant="outlined" onClick={inpt1}>React</Button>

      <Button variant="outlined" onClick={inpt2}>Angular</Button>

      <Button variant="outlined" onClick={inpt3}>Flutter</Button>
    </div>
  )
}

export default Naming
