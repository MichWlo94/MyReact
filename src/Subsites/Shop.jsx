import React from 'react'
import Header from '../Shop/Header'
import { CartContextProvider } from '../Shop/CartContext'
import { UserProgressContextProvider } from '../Shop/UserProgressContext'

const Shop = (props) => {
  
  
  
  
return (
<div onClick={props.closeDropdown} className='w-full h-screen'>
<UserProgressContextProvider>
<CartContextProvider>

<Header /> 

</CartContextProvider>
</UserProgressContextProvider>

</div>
)
}

export default Shop