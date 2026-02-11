import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
          <Toolbar> 
            <Typography>
              
            </Typography>
            <Link to="/Login">
              <Button variant="contained" color="secondary">Login</Button>
              </Link>

              <Link to="/SignUp">
              <Button variant="contained" color="secondary">SignUp</Button>
              </Link>

              <Link to="/Data">
              <Button variant="contained" color="secondary">Data</Button>
              </Link>

              <Link to="/Statebasic">
              <Button variant="contained" color="secondary">State</Button>
              </Link>

              <Link to="/Counts">
              <Button variant='contained' color='secondary'>Counts</Button>
              </Link>

              <Link to="/Naming">
              <Button variant='contained' color='secondary'>Naming</Button>
              </Link>

               <Link to="/Cardsget">
              <Button variant='contained' color='secondary'>Cards</Button>
              </Link>

          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar