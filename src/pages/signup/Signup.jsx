import React from 'react'
import Block1 from '../../content/signup/Block1'
import { useLocation } from 'react-router-dom';

const Signup = ({setLocation}) => {
  const location = useLocation();
    setLocation(location.pathname)
  return (
    <>
      <Block1/>
    </>
  )
}

export default Signup
