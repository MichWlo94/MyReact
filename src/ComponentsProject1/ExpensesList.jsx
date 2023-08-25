import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    
// content - if no expenses found, show this message instead of expenses list 
// otherwise show expenses list filtered by year 
  
let expensesContent = <p className='text-3xl text-white font-lobster'>No expenses found. <br /> Please <span className='text-yellow-500 underline decoration-red-500'>add expense.</span></p>

    if (props.filteredExpenses.length > 0) {
        return expensesContent = props.filteredExpenses.map((expense) => 
        <ExpenseItem  className='z-10' 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />)
      }
  
    return (
    <ul>{expensesContent}
    {/* alternatywnie można zrobić tak:
  // warunek jeśli tablica expenses jest pusta 
   {filteredExpenses.length === 0 && <p className='text-3xl text-white font-lobster'>No expenses found. <br /> Please <span className='text-yellow-500 underline decoration-red-500'>add expense.</span></p>}
  // mapowanie tablicy expenses
   {filteredExpenses.map((expense) => 
  <ExpenseItem  className='z-10' 
  key={expense.id}
  title={expense.title}
  amount={expense.amount}
  date={expense.date} />)} */}
  </ul>
  )
}

export default ExpensesList