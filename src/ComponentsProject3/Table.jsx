import React from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    });


const Table = (props) => {
  return (
    <table className="w-11/12 mx-auto text-center table-fixed md:w-8/12 font-bree text-3 border-spacing-4" >
    <thead className="pb-4 mx-auto border-b-2 border-black">
      <tr className="">
        <th className='border-x border-x-black'>Year</th>
        <th className='border-x border-x-black'>Total Savings</th>
        <th className='border-x border-x-black'>Interest (Year)</th>
        <th className='border-x border-x-black'>Total Interest</th>
        <th className='border-x border-x-black'>Invested Capital</th>
      </tr>
    </thead>
    
    <tbody className="text-2 bg-gradient-to-b from-slate-300 to-slate-500">
        {props.data.map((yearData) => {
        return (
        <tr key={yearData.year}>
        <td className="px-2 pt-2 ">{yearData.year}</td>
        <td className="px-2 pt-2 ">{formatter.format(yearData.savingsEndOfYear)}</td>
        <td className="px-2 pt-2 ">{formatter.format(yearData.yearlyInterest)}</td>
        <td className="px-2 pt-2 ">{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
        <td className="px-2 pt-2 ">{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
        </tr>
        )})}
        </tbody> 
  
  </table>
  )
}

export default Table