import { TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1>SignUp</h1>
       <TextField id="outlined-basic" label="user_name" variant="outlined"/>
       <br /><br />
       <TextField label="email"/>
       <br /><br />
       <TextField label="password"/>
       <br /><br />
       <button>SignUp</button>
    </div>
  )
}

export default SignUp