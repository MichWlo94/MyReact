/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import React from 'react';
import { useState } from 'react';
import ExpenseItem from '../Components/ExpenseItem';
import NewExpense from '../Components/NewExpense';
import ExpenseFilter from '../Components/ExpenseFilter';


function Project1() {
  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
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

  return (
  <>
    <NewExpense onAddExpense={addExpenseHandler} />  
    <div className="flex flex-col items-center justify-center p-4 m-5 shadow-neon-glow-blue rounded-xl bg-slate-700/50">
      
      <ExpenseFilter selected={filteredYear} onFilteredExpense={filterChangeHandler}/>
      
      {expenses.map((expense) => 
        <ExpenseItem  className='z-10 ' 
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />)
      }

    </div>
  </>
  );
}

export default Project1;