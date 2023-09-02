import React from 'react'
import { useState } from 'react'

const ErrorModal = (props) => {
    
    const [hide, setHide] = useState(false)

    const hideHandler = () => {
        props.onHide()
    }


    return (
    <div className={`${hide ? "hidden" : ''} fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50`}>
    <header className="flex flex-col items-center justify-center w-1/2 m-10 mr-10 border-2 border-black rounded-2xl h-1/3 bg-gradient-to-tr from-yellow-400 via-slate-500 to-teal-500">
        <h2 className="mb-2 text-lg font-bold text-gray-800">An Error Occurred!</h2>
        <p className="mb-2 text-gray-700">Please enter a valid UserName and Age (non-empty values).</p>
        <button onClick={hideHandler} className="px-4 py-2 text-white bg-red-500 border-2 border-red-800 rounded-xl hover:bg-red-600 focus:outline-none focus:bg-red-600">Okay</button>
    </header>
    </div>
  )
}

export default ErrorModal