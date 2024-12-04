import React from "react";
import { useState } from "react";
import { Form } from "./components/form/form";
import { Task } from "./components/Task/Task";
import {  Container} from "./components/form/FormStyle";
import { ButtonDelete, ButtonDeleteAll } from "./components/Task/taskStyle";

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    if (task.trim() === '') {
      alert("La tarea no puede estar vacía");
      return;

      
    }
    if (tasks.find(taskItem => taskItem.task === task)) {
      alert("La tarea ya existe");
      return;
      
    }

    const newTask = {
      id: Date.now(),
    task: task,
    };

    
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTask("");
    };

  const deleteTask = (id) => {
  
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

const deleteAll = () => {
  setTasks([]);
};
  return (
    <>
    <Container>
      <Form 
      handleChange = {handleChange} 
      addTask = {addTask} 
      task ={ task} />

      {tasks.map((taskItem) => (
        <Task 
        key={taskItem.id} 
        id={taskItem.id} 
        task={taskItem.task} 
        deleteTask={deleteTask} />
      ))}

      {tasks.length > 0 && (
        <ButtonDeleteAll onClick={deleteAll}>Borrar todas las tareas</ButtonDeleteAll>
      )}

      </Container>
    </>
  );
}

export default App;
