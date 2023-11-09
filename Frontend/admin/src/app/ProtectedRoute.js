import { Outlet } from 'react-router-dom'
import React from 'react'
import Login from './views/pages/login/Login'

const useAuth = () => {
  const user = { loggedIn: true }
  return user && user.loggedIn
}

const ProtectedRoute = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Login />
}

export default ProtectedRoute
