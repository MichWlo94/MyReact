import React from 'react'
import logo2Image from '../assets/logo2.jpg'
import Meals from './Meals'
import { useContext } from 'react'
import CartContext from './CartContext'
import UserProgressContext from './UserProgressContext'
import Cart from './Cart'
import Checkout from './Checkout'

const Header = () => {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity
  }, 0)

  function handleShowCart() {
    userProgressCtx.showCart()
  };

  
    return (
  
    <div className='min-h-screen m-0 antialiased text-white font-righteous bg-gradient-to-b from-green-950 to-yellow-900'>
    <header className='flex items-center justify-between px-10 py-12'>
       <div className='flex items-center gap-4'>
            <img src={logo2Image} alt="logo2Image" className='object-contain w-16 h-16 border-2 border-yellow-400 border-solid rounded-full'/>
            <h1 className="m-0 text-3xl font-semibold tracking-wider text-yellow-400 uppercase">SuperMeals</h1>
        </div> 
        <button onClick={handleShowCart} className='p-2 m-2 mr-20 text-black bg-red-500 border-black rounded-2xl text-8 md:mr-2 hover:bg-red-800'>Cart ({totalCartItems})</button>
    </header>
    <h1 className="items-center text-2xl font-semibold tracking-wider text-center text-yellow-400 uppercase ">Super Foods, in your Neighbourhoods :)</h1>
    <Meals />
    <Cart />
    <Checkout />
    </div>
  
  )
}

export default Header