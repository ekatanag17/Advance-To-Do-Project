import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from './redux/taskSlice';
import AddTask from './components/AddTask';

// import ListTask from './components/ListTask';
import TaskDetails from './components/TaskDetails';



import './App.css';


const App = ()=> {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="my-3 text-center">To Do List</h1>
      <AddTask />
      <TaskDetails />
    </div>
  );
};



export default App;
