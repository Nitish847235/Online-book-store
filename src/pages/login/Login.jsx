import React from 'react'
import Block1 from '../../content/login/Block1'
import { useLocation } from 'react-router-dom';

const Login = ({setLocation}) => {
  const location = useLocation();
    setLocation(location.pathname)
  return (
    <>
      <Block1/>
    </>
  )
}

export default Login
