import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    tasks: []
};

export const todoSlice = createSlice({
    name: "todos",
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
     
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

