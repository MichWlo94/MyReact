/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)



    }

  return (
    <div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
}

export default NewExpense