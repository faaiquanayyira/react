import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Statebasic from './components/Statebasic'
import Counts from './components/Counts'
import Naming from './components/Naming'
import Cardsget from './components/Cardsget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>

    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Data' element={<Data/>}/>
      <Route path='/Statebasic' element={<Statebasic/>}/>
      <Route path='/Counts' element={<Counts/>}/>
      <Route path='/Naming' element={<Naming/>}/>
      <Route path='/Cardsget' element={<Cardsget/>}/> 
    </Routes>
    </>
  )
}

export default App
