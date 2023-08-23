import React from 'react'

const ChartBar = props => {
  
  
  let barFillHeight = '0%'
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
  
    return (
    <div className='flex flex-col items-center h-full'>
        <div className='flex flex-col justify-end w-full h-full overflow-hidden border border-black rounded-xl bg-violet-400'>
            <div className='w-full transition-all ease-out bg-violet-700' style={{height: barFillHeight}}></div>
        </div>
        <div className='font-bold text-center text-2'>{props.label}</div>
    </div>
  )
}

export default ChartBar