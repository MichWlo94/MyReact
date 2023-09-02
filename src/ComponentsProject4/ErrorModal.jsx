import React, { useRef } from 'react'

const ErrorModal = (props) => {
    
const modalRef = useRef(null);

// Check if the click target is the modal itself or a child of the modal.
const hideHandler = (e) => {

        //Inside the hideHandler function, we check if the click target (e.target) is either the modal itself or one of its child elements. This is done using the modalRef.current.contains(e.target) condition.
        //modalRef.current is the DOM element associated with the modalRef. It represents the modal element in the DOM.
        //e.target is the DOM element that triggered the click event.
        //The ! (negation) operator in !modalRef.current.contains(e.target) means "not." So, if the click target is NOT within the modal or one of its child elements, the condition becomes true.
        // Using if (!modalRef.current.contains(e.target)) without the if (modalRef.current && ...) part could lead to a potential issue if modalRef.current is null. It's essential to ensure that modalRef.current exists before trying to access its contains method, as it could lead to a runtime error if it doesn't exist.
        
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            props.onHide();
        }
    };

    return (
        <div onClick={hideHandler} className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
            <header ref={modalRef} className="flex flex-col items-center justify-center w-1/2 m-10 mr-10 border-2 border-black rounded-2xl h-1/3 bg-gradient-to-tr from-yellow-400 via-slate-500 to-teal-500">
                <h2 className="mb-2 text-lg font-bold text-gray-800">An Error Occurred!</h2>
                <p className="mb-2 text-gray-700">Please enter a valid UserName and Age (non-empty values).</p>
                <button onClick={props.onHide} className="px-4 py-2 text-white bg-red-500 border-2 border-red-800 rounded-xl hover:bg-red-600 focus:outline-none focus:bg-red-600">
                    Okay
                </button>
            </header>
        </div>
    );
};

export default ErrorModal;





