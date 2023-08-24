import React, { useState } from 'react';

import CourseButton from './CourseButton';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={formSubmitHandler}>
      <div className="flex flex-col items-center" >
        <label>Course Goal</label>
        <input className='border border-black' type="text" onChange={goalInputChangeHandler} />
      </div>
      <CourseButton type="submit">Add Goal</CourseButton>
    </form>
  );
};

export default CourseInput;
