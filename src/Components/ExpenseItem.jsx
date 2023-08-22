/* eslint-disable react/prop-types */
import { useState } from "react"


// alternatywnie mozna zrobic tak: function ExpenseItem({title, amount, date}) {return (<>...<>)} 
// i wtedy nie trzeba pisac props.title, props.amount, props.date, tylko od razu title, amount, date

function ExpenseItem(props) {


  // tak można pobierać dane z props.date: 
  const year = props.date.getFullYear()
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const dayOfWeek = props.date.toLocaleString('en-US', {weekday: 'long'})


  // czyli robie zmienną title = props.title oraz setTitle do updatowania, 
  // dlatego na dole daje juz tylko {title} zamiast props.title
  
  // const [title, setTitle] = useState(props.title)

  // const clickHandler = () => {
  //   setTitle('ddddd')
  // }



  return (
  <>
      <div className='flex flex-row items-center justify-start w-full p-2 m-2 break-words border border-teal-200 shadow-md sm:w-10/12 font-lobster md:w-11/12 sm:min-w-fit rounded-xl shadow-black bg-gradient-to-r from-white via-red-400 to-teal-500/50' >
        {/* <div className='min-w-fit'>{props.date.toISOString()}</div> */}


        <div className='w-24 text-lg min-w-fit'>
          <div className="flex flex-col items-center p-1 border-2 border-teal-600 bg-gradient-to-tr from-yellow-100 via-green-300 to-rose-500 rounded-xl">
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
          <div>{dayOfWeek}</div>
          </div>
        </div>


        <div className='flex items-center justify-between w-auto pl-1 pr-1 sm:w-full sm:pr-10 sm:pl-10'>
          <h2 className='px-3 mr-1 text-xl bg-teal-500 border-2 border-teal-700 rounded-lg sm:mr-3 sm:p-3 sm:text-2xl'>{props.title}</h2>
          <div className='w-1/12 pl-2 pr-2 font-bold text-white border-2 rounded-lg text-md sm:p-3 sm:text-2xl min-w-fit bg-violet-900 border-violet-500'>$ {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler} className="mr-1 text-white break-words bg-teal-700 border-2 text-md sm:mr-2 sm:px-2 sm:text-xl h-fit hover:bg-teal-500 sm:min-w-fit rounded-xl">Change Item</button> */}
      </div>
    
  </>
  )
}

export default ExpenseItem

