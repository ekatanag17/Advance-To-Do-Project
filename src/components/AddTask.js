import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import '../styles.css';

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tag, setTag] = useState("");

  const handleAdd = () => {
    const trimmedTask = task.trim();
    const trimmedTag = tag.trim();

    if (trimmedTask) {
      dispatch(addTask({ task: trimmedTask, priority, tag: trimmedTag || "No Category" }));
      setTask("");
      setTag("");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
        className="form-control"
      />
      <select
        className="form-control my-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Enter task category (e.g., Work, Personal)"
        className="form-control my-2"
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
};


export default AddTask;
