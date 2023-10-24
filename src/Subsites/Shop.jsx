import React from 'react'
import Header from '../Shop/Header'
import { CartContextProvider } from '../Shop/CartContext'

const Shop = (props) => {
  
  
  
  
return (
<div onClick={props.closeDropdown} className='w-full h-screen'>
<CartContextProvider>

<Header /> 

</CartContextProvider>
</div>
)
}

export default Shop