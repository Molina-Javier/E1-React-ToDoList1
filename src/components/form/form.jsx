import React from "react";
import { Title, Formulario, Input, Button } from "./FormStyle";

export const Form = ({ handleChange, addTask, task }) => {
  return (
    <>
      <Title>Nuctasks</Title>
      <Formulario onSubmit={addTask}>
        <Input type="text" placeholder="¿Que tarea desea agregar?" value={task} onChange={handleChange} />
        <Button type="submit">Agregar</Button>
      </Formulario>
      </>
  );
};
