import React, { useState } from 'react';

import CourseGoalList from '../ComponentsProject2/CourseGoalList'
import CourseInput from '../ComponentsProject2/CourseInput'

const Project2 = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section className='flex items-center justify-center w-10/12 p-3 mx-auto mt-4 bg-slate-300' id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section className='flex items-center justify-center w-10/12 p-3 mx-auto mt-3 bg-slate-300' id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default Project2;
