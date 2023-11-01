import React, { useState } from 'react';

import CourseButton from './CourseButton';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };


  //alternatywnie mozna dodać className={`form-control ${!isValid ? 'invalid' : ''}`} 
  //czyli jeśli isValid jest false to dodajemy klasę invalid (opisaną w cssie) a jeśli nie to nic nie dodajemy
  
  //można to samo zrobić w tailwindzie: className={`border ${!isValid ? "border-red-500 bg-salmon" : "border-black"} m-2`}
  
  return (
    <form className="flex flex-col items-center" onSubmit={formSubmitHandler}>
      <div className="flex flex-col items-center" >
        <label style={{color: !isValid ? "red" : "black"}}>Course Goal</label>
        <input 
        className={`border ${!isValid ? "border-red-500 bg-salmon" : "border-black"} m-2`} type="text" onChange={goalInputChangeHandler} />
      </div>
      <CourseButton type="submit">Add Goal</CourseButton>
    </form>
  );
};

export default CourseInput;
