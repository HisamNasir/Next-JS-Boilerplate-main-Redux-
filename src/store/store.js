import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
export const store = configureStore({
  reducer: {
    todo: todoReducer
  },


});
