/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

const ExpenseFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onFilteredExpense(event.target.value)
    }


  return (
    <div className='w-11/12 px-4 text-2xl text-black font-lobster'>
      <div className='flex items-center justify-between w-full my-4 '>
        <label className='mb-2 font-bold'>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler} className='px-12 py-2 font-bold rounded-2xl'>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;