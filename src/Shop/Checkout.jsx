import Modal from './Modal'
import CartContext from './CartContext'
import { useContext } from 'react'
import Input from './Input';
import UserProgressContext from './UserProgressContext';
import axios from 'axios';
import useHttp from './useHttp';
import Error from './Error';

const requestConfig = {method: 'POST', headers: {'Content-Type': 'application/json'}};

function Checkout() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3500/orders', requestConfig);
    
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0).toFixed(2)

    function handleClose() {
        userProgressCtx.hideCheckout()
    };

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
      }

    function handleSubmit(event) {
        event.preventDefault();
        
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        
        

    //     axios.post('http://localhost:3500/orders', {
    //         order: {
    //             items: cartCtx.items,
    //             customer: customerData
    //         }
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => {
    //         // Handle the successful response here
    //         console.log('Order created:', response.data.message);
    //     })
    //     .catch(error => {
    //         // Handle any errors here
    //         console.error('Error creating order:', error);
    //     });
    // }
    
    sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));

    }

    let actions = (
        <>
        <button
            onClick={handleClose}
            type="button"
            className="px-4 py-2 mr-2 font-bold text-black bg-red-500 rounded hover:bg-red-600"
        >
            Cancel
        </button>
        <button
            type="submit"
            className="px-4 py-2 font-bold text-black bg-green-500 rounded hover:bg-green-600"
        >
            Submit Order
        </button>
        </>);
    
    if (isSending) {
        actions = <p className="text-center">Sending order data...</p>;
    }

    if (data && !error) {
        return (
          <Modal
            open={userProgressCtx.progress === 'checkout'}
            onClose={handleFinish}
          >
            <h2 className='pb-2 text-2xl font-bold text-center'>Success!</h2>
            <p className='text-center'>Your order was submitted successfully.</p>
            <p className='text-center'>
              We will get back to you with more details via email within the next
              few minutes.
            </p>
            <p className='flex justify-center p-2'>
              <button className="px-4 py-2 mr-2 font-bold text-black bg-red-500 rounded hover:bg-red-600" 
              onClick={handleFinish}>Finish</button>
            </p>
          </Modal>
        );
      }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
    
    <form onSubmit={handleSubmit} className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg h-fit">
    
    <h2 className="mb-4 text-2xl font-bold text-center">Checkout</h2>
    <p className="mb-4 text-center">Total Amount: {cartTotal} PLN</p>
    
    {/* <div className="mb-4">
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
    </div> */}


    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Full Name
        </label>
        <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="name"
            name='name'
        />
    </div>

    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            E-Mail
        </label>
        <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            name='email'
        />
    </div>

    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="street">
            Street
        </label>
        <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="street"
            name='street'
        />
    </div>

    <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
        <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="postal-code">
                Postal Code
            </label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="text"
                id="postal-code"
                name='postal-code'
            />
        </div>
        <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="city">
                City
            </label>
            <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="text"
                id="city"
                name='city'
            />
        </div>
    </div>
    {error && <Error title="Failed to submit order" message={error} />}
    <div className="flex justify-center mt-6">
        {actions}
    </div>
</form>
    </Modal>
  )
}

export default Checkout