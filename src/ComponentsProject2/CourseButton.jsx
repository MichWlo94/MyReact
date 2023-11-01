import React from 'react';

const CourseButton = props => {
  return (
    <button type={props.type} className="bg-red-300" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default CourseButton;
