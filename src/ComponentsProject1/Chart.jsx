import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))
    //Math.max() zwraca największą liczbę z podanych argumentów lub NaN jeśli któryś z argumentów nie jest liczbą
    //Math.max(...props.dataPoints.map(dataPoint => dataPoint.value)) - zwraca największą wartość z tablicy props.dataPoints



  return (
    <div className='flex w-full h-40 p-6 mx-6 text-center bg-red-100 sm:w-11/12 justify-evenly rounded-xl '>
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} 
        key={dataPoint.label} />)}
    </div>
    )
}

export default Chart