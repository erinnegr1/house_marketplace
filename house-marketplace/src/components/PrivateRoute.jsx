import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

//outlet allows us to render child elements

const PrivateRoute = () => {

    const {loggedIn, checkingStatus} = useAuthStatus() //destructure those two values from the hook

    if(checkingStatus) {
      return <Spinner />
    }
    
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />

}

export default PrivateRoute
