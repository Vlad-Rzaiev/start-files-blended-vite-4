import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, getTodos } from './todosOps';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const hanleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentTodo: null,
  },
  reducers: {
    setCurrentTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },
    clearCurrentTodo: state => {
      state.currentTodo = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, handlePending)
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getTodos.rejected, hanleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addTodo.rejected, hanleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(todo => todo.id !== payload.id);
      })
      .addCase(deleteTodo.rejected, hanleRejected)
      .addCase(editTodo.pending, handlePending)
      .addCase(editTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentTodo = null;
        state.items = state.items.map(todo =>
          todo.id === payload.id ? payload : todo,
        );
      })
      .addCase(editTodo.rejected, hanleRejected);
  },
});

export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.loading;
export const selectError = state => state.todos.error;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const { setCurrentTodo, clearCurrentTodo } = todosSlice.actions;

export default todosSlice.reducer;
