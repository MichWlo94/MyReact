import React from 'react'
import Chart from './Chart'

const ExpensesChart = (props) => {
  
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'June', value: 0},
    {label: 'July', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}]
    
    //uzywamy expense of props.expenses ponieważ props.expenses to array(tablica) a nie object(obiekt)
    //w przypadku obieku używamy expense in props.expenses

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();  //starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    //chartDataPoints[expenseMonth] oznacza że w tablicy chartDataPoints wybieramy element o indeksie expenseMonth
    //a następnie w tym elemencie wybieramy wartość value i dodajemy do niej expense.amount (czyli kwotę wydatku)


    return (
    
        <Chart dataPoints={chartDataPoints} />

  )
}

export default ExpensesChart