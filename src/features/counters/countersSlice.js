import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment: (state, action) => {
      const countersIndex = state.findIndex(
        (counter) => counter.id === action.payload,
      );
      state[countersIndex].value++;
    },
    decrement: (state, action) => {
      const countersIndex = state.findIndex(
        (counter) => counter.id === action.payload,
      );
      state[countersIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
