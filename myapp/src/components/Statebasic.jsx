import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {

    var[name,setName]=useState(" nayyira")

    var[NAME,setRare]=useState(" ")

    const inputHandler = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const inputHandlers = () =>{
        setRare(name)
    }

  return (
    <div>
        <h1>Welcome&nbsp;{name}</h1>

        <h1>Welcome&nbsp;{NAME}</h1> 

        <Button onClick={inputHandlers} variant="contained" color="secondary">Click Me</Button>
        <br /><br />
        
        <TextField variant='outlined' onChange={inputHandler}/>
    </div>
  )
}

export default Statebasic