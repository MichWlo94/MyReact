import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="mx-12 my-auto text-center">
    <img className="object-contain w-20 h-20 mx-auto bg-transparent" src={logo} alt="logo" />
    <h1 className="text-8">Investment Calculator</h1>
  </header>
  )
}

export default Header