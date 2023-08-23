/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import React from 'react';
import { useState } from 'react';
import NewExpense from '../Components/NewExpense';
import ExpenseFilter from '../Components/ExpenseFilter';
import ExpensesList from '../Components/ExpensesList';
import ExpensesChart from '../Components/ExpensesChart';

function Project1() {
  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2025, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2025, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2024, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Toy (Wooden)',
      amount: 450,
      date: new Date(2024, 5, 12),
    },    
    {
      id: 'e5',
      title: 'New Pet (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },    
    {
      id: 'e6',
      title: 'New Tools (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },    
    {
      id: 'e7',
      title: 'New Book (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ];

  // new expense - robi się nowy array expenses który zawiera wszystkie 
  // elementy z poprzedniego arraya expenses + nowy element
  
  const [expenses, setExpenses] = useState(dummy_expenses)
  
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses] //typowe podejście do dodawania nowych elementów do tablicy która ma już jakieś elementy
    })
  }

  // filter
  const [filteredYear, setFilteredYear] = useState('2023')
  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
        })

  
  //new expense window      
  const [showNewExpense, setShowNewExpense] = useState(false)
  const showNewExpenseHandler = () => {
    setShowNewExpense(!showNewExpense)
  }

  const expenseWindow = (showNewExpense === true) ? 
  <NewExpense showExpenseWindow={showNewExpenseHandler} onAddExpense={addExpenseHandler} /> : 
  <div className='grid items-center justify-center p-4 mx-8 my-10 border-4 border-teal-700 shadow-neon-glow-green md:space-y-0 md:space-x-2 rounded-2xl bg-violet-500'>
    <button onClick={showNewExpenseHandler} className="w-48 h-10 col-span-2 px-2 mr-2 text-xl font-bold text-center text-white bg-red-300 border-2 md:col-span-1 hover:bg-red-500 rounded-xl">Add New Expense
    </button>
  </div>
  

  return (
  <>
    {expenseWindow}
    <div className="flex flex-col items-center justify-center p-4 m-5 shadow-neon-glow-blue rounded-xl bg-slate-700/50">
      
      <ExpenseFilter selected={filteredYear} onFilteredExpense={filterChangeHandler}/>
      
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />

    </div>
  </>
  );
}

export default Project1;