import React from 'react'

const Card = (props) => {

const { show, onDelete } = props;


  return (
    <div className="flex flex-row items-center justify-center w-auto py-2 m-5 border-2 border-black rounded-2xl h-fit bg-gradient-to-tr from-yellow-400 via-slate-500 to-teal-500">
            <div className="w-1/2 px-3 py-2 mx-8 text-gray-700 bg-white border border-black rounded-lg focus:outline-none focus:shadow-outline">
                {show.UserName} (Age: {show.Age})
            </div>
            <button onClick={onDelete} className="px-4 py-2 text-white bg-red-500 border-2 border-red-800 rounded-xl hover:bg-red-600 focus:outline-none focus:bg-red-600">
                Delete
            </button>
    </div>
  )
}

export default Card