import React, {useMemo}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/taskSlice';
import '../styles.css';
const TaskDetails = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const taskItems = useMemo(() => {
    return tasks.map((task, index) => (
      <li key={index} className="list-group-item d-flex justify-content-between">
        {task.task} ({task.priority}) - Category: {task.tag || "No category"}
        <button className="btn btn-danger" onClick={() => dispatch(removeTask(index))}>
          Delete
        </button>
      </li>
    ));
  }, [tasks]);

  return <ul className="list-group container">{taskItems}</ul>;
}

export default TaskDetails;







