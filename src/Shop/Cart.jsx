import React, { useContext } from 'react'
import Modal from './Modal'
import CartContext from './CartContext'
import UserProgressContext from './UserProgressContext'
import CartItem from './CartItem'

function Cart() {

   const cartCtx = useContext(CartContext);
   const userProgressCtx = useContext(UserProgressContext);

   const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
       return totalPrice + item.quantity * item.price
   }, 0).toFixed(2)

   function handleCloseCart() {
       userProgressCtx.hideCart()
   };

   function handleClearCart() {
         cartCtx.clearCart()
    }

    function handleGoToCheckOut() {
        userProgressCtx.showCheckout()
    }

  return (
    <Modal open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
    <div className="flex flex-col justify-between p-4 text-center bg-white rounded-lg shadow-lg h-fit">
        <h2 className="mb-4 font-bold xl:text-14 text-8">Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} {...item} 
                onIncrease={() => cartCtx.addItem(item)} 
                onDecrease={() => cartCtx.removeItem(item.id)}/>
            ))}
        </ul>
        <div className='flex flex-col justify-end text-center h-4/5 xl:h-fit xl:w-auto'>
            <p className="pt-2 mt-6 mb-4 font-bold xl:text-10 text-5">Total: {cartTotal} PLN</p>
            <div className={`flex pb-4 ${cartCtx.items.length > 0 ? ("justify-between") : ("justify-center")}`}>
                <button
                    onClick={handleCloseCart}
                    className="px-4 py-2 font-bold text-black bg-red-500 rounded hover:bg-red-600"
                >
                    Close Cart
                </button>
                
                {cartCtx.items.length > 0 && <button onClick={handleClearCart} className="px-4 py-2 mx-3 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-600">
                    Clear Cart </button>}

                {cartCtx.items.length > 0 && <button onClick={handleGoToCheckOut}
                    className="px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-600"
                >
                    Check Out
                </button>}
            </div>
        </div>
    </div>
    </Modal>
  )
}

export default Cart