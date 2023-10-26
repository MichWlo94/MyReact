import React, { useContext } from 'react'
import Modal from './Modal'
import CartContext from './CartContext'
import UserProgressContext from './UserProgressContext'

function Cart() {

   const cartCtx = useContext(CartContext);
   const userProgressCtx = useContext(UserProgressContext);

   const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
       return totalPrice + item.quantity * item.price
   }, 0)

   function handleCloseCart() {
       userProgressCtx.hideCart()
   };

  return (
    <Modal open={userProgressCtx.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item => (
                <li key={item.id}>{item.name} - {item.quantity}</li>
            ))}
        </ul>
        <p className=''>Total: ${cartTotal} PLN</p>
        <p>
            <button onClick={handleCloseCart} className='px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600'>Close Cart</button>
            <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-red-600 ' >Check Out</button>
        </p>
    </Modal>
  )
}

export default Cart