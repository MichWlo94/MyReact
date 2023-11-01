import React from 'react'
import { useState } from 'react'




const Form = (props) => {


const initialInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    "duration": 10}

const [userInput, setUserInput] = useState(initialInput)
    
const submitHandler = (e) => {
    e.preventDefault()
    
    props.onCalculate(userInput)
}

const resetHandler = (e) => {
    setUserInput({
        "current-savings": 0,
        "yearly-contribution": 0,
        "expected-return": 0,
        "duration": 0
    })
}

const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
        return {...prevState, [input]: +value}
    })
}

  return (
    <form onSubmit={submitHandler} className="max-w-lg p-4 mx-auto my-8 border-2 rounded-md border-green-950 bg-gradient-to-b from-green-700 to-green-500">
        <div className="flex gap-6 py-2 justify-evenly">
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="current-savings">Current Savings ($)</label>
            <input 
            onChange={(event) => inputChangeHandler('current-savings', event.target.value)} 
            className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " 
            value={userInput['current-savings']}
            type="number" 
            id="current-savings" />
          </p>
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} 
            className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " 
            value={userInput['yearly-contribution']}
            type="number" 
            id="yearly-contribution" />
          </p>
        </div>
        <div className="flex gap-6 py-2 justify-evenly">
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
            onChange={(event) => inputChangeHandler('expected-return', event.target.value)} 
            className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " 
            value={userInput['expected-return']}
            type="number" 
            id="expected-return" />
          </p>
          <p>
            <label className="block mb-2 font-bold uppercase text-2 font-bree" htmlFor="duration">Investment Duration (years)</label>
            <input 
            onChange={(event) => inputChangeHandler('duration', event.target.value)} 
            className="w-full p-1 text-gray-700 bg-white border-2 rounded-md border-green-950 text-4 " 
            value={userInput['duration']}
            type="number" 
            id="duration" />
          </p>
        </div>
        <p className="flex justify-center gap-4">
          <button onClick={resetHandler} type="reset" className="px-4 py-2 text-gray-100 bg-teal-700 border border-black rounded-md cursor-pointer hover:bg-teal-900">
            Reset
          </button>
          <button type="submit" className="px-4 py-2 text-gray-100 bg-teal-700 border border-black rounded-md cursor-pointer hover:bg-teal-900">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default Form