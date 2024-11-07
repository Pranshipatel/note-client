import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../pages/Home'
import Notes from '../pages/Notes'

const AppRoutes = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/note' element={<Notes/>}/>
      </Routes>
    </>
  )
}

export default AppRoutes
