import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6788090fc4a42c9161091efe.mockapi.io';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkAPI) => {
    try {
      const { data } = await axios.post('/todos', newTodo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todos/${todoId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (editObj, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todos/${editObj.id}`, editObj);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
