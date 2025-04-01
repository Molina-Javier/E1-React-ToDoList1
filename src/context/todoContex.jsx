import { createContext } from "react";
import {  useState } from "react";


const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if(task.trim() === "") {
      setError("Ingrese una tarea");
      return;
    }
    if(tasks.find((t) => t.name === task)) {
      setError("La tarea ya existe");
      return;
    }

    const newTask = {
      id: Date.now(),
      name:task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setError("");
    console.log(tasks);

  };

const deleteTask = (id) => {
  const newTasks = tasks.filter((t) => t.id !== id);
  setTasks(newTasks);
};

const deleteAllTasks = () => {
  setTasks([]);
  setError("");
};

const handleSubmit = (e) => {
  e.preventDefault();
  addTask();
};

const handleChange = (e) => {
  const task = e.target.value
  setTask(task);
  setError("");
};

return (
  <ToDoContext.Provider value={{ task, setTask, tasks, addTask, deleteTask, deleteAllTasks, error, handleSubmit, handleChange }}>
    {children}
  </ToDoContext.Provider>
);
}

export {ToDoContext, ToDoProvider};

