import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../store/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <li>
      <span onClick={handleToggleTask} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleRemoveTask}>Delete</button>
    </li>
  );
};

export default Task;