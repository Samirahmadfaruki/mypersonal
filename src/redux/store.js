import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Importing our to-do reducer
import darkReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Adding our to-do slice to the store
    darkMode:darkReducer,
  },
});
