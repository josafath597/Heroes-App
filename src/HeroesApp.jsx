import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/authContext'
import './index.css'
import { authReducer } from './auth/authReducer'

const initAuthState = () => {

    return JSON.parse( localStorage.getItem('user') )  || { logged : false };
}

export const HeroesApp = () => {

  const [ user , dispatch] = useReducer( authReducer, {}, initAuthState );

  useEffect(() => {
    if(!user) return;

    localStorage.setItem('user', JSON.stringify(user));

  }, [user])
  

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }} > 
      <AppRouter />

    </AuthContext.Provider>
  )
}
