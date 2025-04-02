import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const selectTodos = state => state.todos.items;

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
