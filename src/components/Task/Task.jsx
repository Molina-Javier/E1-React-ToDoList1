import { useDispatch } from "react-redux";
import { ButtonDelete, ListContainer } from "./taskStyle";
import { removeTodo } from "../../redux/slices/todoSlice";

export const Task = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };



  return (
    <ListContainer>
      <span>
        {task}
      </span>
      <ButtonDelete onClick={handleDelete}>Borrar</ButtonDelete>
    </ListContainer>
  );
};
