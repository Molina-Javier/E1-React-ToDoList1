import React, { useState } from "react";
import { Formulario, Input, Button, Error } from "./FormStyle";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";

export const Form = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todos.tasks);

  const handleChange = (e) => {
    setTask(e.target.value);
    setError(""); // Limpiar error cuando el usuario empiece a escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validamos tarea vacía
    if (!task.trim()) {
      setError("Ingresa una tarea");
      return;
    }

    // Validamos tarea duplicada
    const taskExists = tasks.some(
      existingTask => existingTask.name.toLowerCase() === task.trim().toLowerCase()
    );

    if (taskExists) {
      setError("Esta tarea ya existe");
      return;
    }

    // Si pasa las validaciones, agregar la tarea
    dispatch(addTodo({
      id: Date.now(),
      name: task.trim(),
    }));
    
    // Limpiar el formulario y el error
    setTask("");
    setError("");
  };
  
  return (
    <>
      <Formulario onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="¿Que tarea desea agregar?" 
          onChange={handleChange}
          value={task}
        />
        <Button type="submit">Agregar</Button>
      </Formulario>
      {error && <Error>{error}</Error>}
    </>
  );
};
