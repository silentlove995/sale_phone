import {Outlet} from 'react-router-dom'
import React from 'react'
import JwtLogin from "./views/sessions/JwtLogin";

const useAuth = () => {
  const user = { loggedIn: true }
  return user && user.loggedIn
}

const ProtectedRoute = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet/> : <JwtLogin/>
}

export default ProtectedRoute
