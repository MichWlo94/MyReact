/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const ExpenseForm = (props) => {

    // const [newTitle, setNewTitle] = useState('')
    // const titleHandler = (e) => {
    //     setNewTitle(e.target.value)
    // }
    // const [newAmount, setNewAmount] = useState('')
    // const amountHandler = (e) => {
    //     setNewAmount(e.target.value)
    // }
    // const [newDate, setNewDate] = useState('')
    // const dateHandler = (e) => {
    //     setNewDate(e.target.value)
    // }

    // e.target.value to to co wpisuje uzytkownik w input, i jest to zawsze string, czyli objekt typu string
    
    // useState przyjmuje tez objekty, np. const [userInput, setUserInput] = useState({title: '', amount: '', date: ''}) i wtedy mozna robic np. const titleHandler = (e) => {setUserInput((prevState) => {return {...prevState, title: e.target.value}})} i wtedy nie nadpisuje calego obiektu, tylko tylko title, a reszta zostaje bez zmian
    
    // prevState to poprzedni stan, czyli w tym przypadku to co jest w userInput, czyli {title: '', amount: '', date: ''}, a {...prevState, title: e.target.value} to nowy stan, czyli {title: e.target.value, amount: '', date: ''}, czyli nadpisuje tylko title, a reszta zostaje bez zmian

    const [newExpense, setNewExpense] = useState({title: '', amount: '', date: ''})
    const expenseTitle = (e) => {
        setNewExpense((prevState) => {
            return {...prevState, title: e.target.value}})
        e.preventDefault()
    }

    const expenseAmount = (e) => {
        setNewExpense((prevState) => {
            return {...prevState, amount: e.target.value}})
        e.preventDefault()
    }

    const expenseDate = (e) => {
        setNewExpense((prevState) => {
            return {...prevState, date: e.target.value}})
        e.preventDefault()
    }

     const submitHandler = (e) => {
        e.preventDefault();
        
        const expenseData = {
            title: newExpense.title,
            amount: newExpense.amount,
            date: new Date(newExpense.date)
        }
        props.onSaveExpenseData(expenseData);
        setNewExpense({title: '', amount: '', date: ''})
    }
        
  
  
  return (
    <form onSubmit={submitHandler} className='grid items-center justify-center grid-cols-3 p-4 mx-8 my-10 border-4 border-teal-700 shadow-neon-glow-green md:space-y-0 md:space-x-2 rounded-2xl bg-violet-500' action="input">
       
        {/* title input*/}
        <div className='flex flex-col col-span-1 pb-4 my-2 mb-4 min-w-fit md:col-span-1'>
            <label className='px-2 pb-2 text-xl font-bold font-bree'>Title</label>
            <input value={newExpense.title} className='w-3/4 p-1 px-1 ml-2' placeholder='Enter Item Name' type="text" onChange={expenseTitle} />
        </div>
        {/* amount input*/}
        <div className='flex flex-col col-span-1 pb-4 my-2 mb-4 min-w-fit md:col-span-1'>
            <label className='px-2 pb-2 text-xl font-bold font-bree'>Amount</label>
            <input value={newExpense.amount} onChange={expenseAmount} className='w-3/4 p-1 px-1' placeholder='Enter Price' type="number" min='0.01' step='0.01' />
        </div>

        {/* date input*/}
        <div className='flex flex-col col-span-1 pb-4 my-2 mb-4 min-w-fit md:col-span-1'>
            <label className='px-2 pb-2 text-xl font-bold font-bree'>Date</label>
            <input value={newExpense.date} onChange={expenseDate} className='w-3/4 p-1 px-1' type="date" min='2020-01-01' max='2030-12-31' />
        </div>

        {/* submit button*/}
        <div className='flex items-center justify-center col-span-3 min-w-fit md:col-span-3'>
        <button type='submit' className="w-48 h-10 col-span-2 px-2 mr-2 text-xl font-bold text-center text-white bg-teal-700 border-2 md:col-span-1 hover:bg-teal-500 rounded-xl" >Add Expense</button>
        <button onClick={props.action} className="w-48 h-10 col-span-2 px-2 mr-2 text-xl font-bold text-center text-white bg-teal-700 border-2 md:col-span-1 hover:bg-teal-500 rounded-xl" >Cancel</button>
        </div>
    </form>
    )
}

export default ExpenseForm