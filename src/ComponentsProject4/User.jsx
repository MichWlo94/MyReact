import React from 'react'
import Button from '../ComponentsProject4/Button'
import { useState } from 'react'
import ErrorModal from './ErrorModal'


const User = (props) => {
    
    // Create a state to store the user data
    const [userData, setUserData] = useState({
        UserName: '',
        Age: ''
    });

    const [showErrorModal, setShowErrorModal] = useState(false); // Manage modal visibility

    // Update the state when the user types in the input field
    const inputChangeHandler = (input, value) => {
        setUserData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };

    // Submit the form and reset the state to empty strings when the user clicks the submit button
    const submitHandler = (e) => {
        e.preventDefault();
        
        if (userData.UserName.length === 0 || userData.Age.trim() === '' || +userData.Age < 1) {
            setShowErrorModal(true); // Show the modal
            return;
        }

        // Check if both UserName and Age are filled before adding to the list
        // if (userData.UserName.length === 0 || userData.Age.trim() === '') {
        //     alert('Please fill in all fields before submitting.');
        //     return;
        // }

        // // Check if the age is a valid number
        // if (+userData.Age < 1) {
        //     alert('Please enter a valid age (> 0).');
        //     return;
        // }
          
        props.onInput(userData); // Pass the user data to the parent component 

        setUserData({
            UserName: '',
            Age: ''
        });
    };

    // Reset the state to empty strings when the user clicks the reset button
    const resetHandler = (e) => {
        e.preventDefault();
        setUserData({
            UserName: '',
            Age: ''
        });}

  return (
    <>
    {showErrorModal && <ErrorModal onHide={() => setShowErrorModal(false)} />} {/* Conditional rendering of modal */}
    <form onSubmit={submitHandler} className="flex flex-col items-center justify-center w-auto m-10 mr-10 border-2 border-black rounded-2xl h-1/3 bg-gradient-to-tr from-yellow-400 via-slate-500 to-teal-500">
        <div>
        <label className="mb-2 text-lg font-bold text-gray-800" htmlFor="UserName">UserName</label>
        <input value={userData.UserName} onChange={(e) => inputChangeHandler('UserName', e.target.value)} className="w-full px-3 py-2 mb-3 text-gray-700 border border-black rounded-lg focus:outline-none focus:shadow-outline" type="text" name="UserName" id="UserName" placeholder="Your UserName" />
        </div>
        <div>
        <label className="mb-2 text-lg font-bold text-gray-800" htmlFor="Age">Age</label>
        <input value={userData.Age} onChange={(e) => inputChangeHandler('Age', e.target.value)} className="w-full px-3 py-2 mb-3 text-gray-700 border border-black rounded-lg focus:outline-none focus:shadow-outline" type="number" name="Age" id="Age" placeholder="Your Age" />
        </div>
        <div className="flex gap-6 py-2 justify-evenly">
        <button onClick={resetHandler} className="px-4 py-2 mt-4 text-white bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Reset</button>
        <Button />
        </div>
    </form>
    </>
  )
}

export default User