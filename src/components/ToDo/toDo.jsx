import React from "react";
import { Container, Title } from "../form/FormStyle";
import { Form } from "../form/form";
import { useSelector, useDispatch } from "react-redux";
import { Task } from "../Task/Task";
import { ButtonDeleteAll } from "../Task/taskStyle";
import { removeTodo } from "../../redux/slices/todoSlice";

export const ToDoList = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    tasks.forEach(task => {
      dispatch(removeTodo(task.id));
    });
  };

  return (
    <Container>
      <Title>Nuctasks</Title>
      <Form />
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          id={task.id} 
          task={task.name}
          completed={task.completed}
        />
      ))}

      {tasks.length > 0 && (
        <ButtonDeleteAll onClick={handleDeleteAll}>
          Borrar todas las Tareas!
        </ButtonDeleteAll>
      )}
    </Container>
  );
};
