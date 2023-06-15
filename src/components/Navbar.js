import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack 
    direction='row' 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: 'black', top: 0, justifyContent: 'space-between'}}>
    
    <Link to="/" style={{ display: 'flex', alignItems: 'center',margin: '0px 0px 0px 6px'}}>
        <img src={logo} alt="logo" style={{height: '45px'}}/>
    </Link>

    <SearchBar/>

    </Stack>
  )
}

export default Navbar
