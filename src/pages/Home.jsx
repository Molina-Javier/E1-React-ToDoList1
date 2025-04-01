import React from 'react'
import { HomePageContainer } from './style'
import { ToDoList } from '../components/ToDo/toDo'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <ToDoList />
    </HomePageContainer>
  );
};


