import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
    setTasks: (_, action) => action.payload,
  },

});

export const { addTask, removeTask, setTasks} = taskSlice.actions;
export default taskSlice.reducer;
