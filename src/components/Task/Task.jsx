import { ButtonDelete, ListContainer } from "./taskStyle";

export const Task = ({id, task, deleteTask}) => {
  return (
    <>
    <ListContainer>
        <span>
            {task}
        </span>
        <ButtonDelete onClick={()=> deleteTask(id) }>Borrar</ButtonDelete>
    </ListContainer>
    </>
  )

}
