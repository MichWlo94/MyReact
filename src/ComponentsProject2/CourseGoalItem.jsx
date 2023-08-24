import React from 'react';


const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="p-1 m-1 bg-red-300" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
