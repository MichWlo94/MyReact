import React from 'react'

function CartItem({name, quantity, price, onIncrease, onDecrease}) {
  return (
    <li className='flex items-center justify-between py-1 border-b-2 border-gray-200'>
        <p className='pr-4'>{name} - {quantity} x {price} PLN</p>
        <p className='flex font-bold'>
            <button onClick={onIncrease} className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>+</button>
            <span className='m-3'>{quantity}</span>
            <button onClick={onDecrease} className='px-2 py-1 bg-gray-200 rounded hover:bg-gray-300'>-</button>
        </p>
    </li>

  )
}

export default CartItem