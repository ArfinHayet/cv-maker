import { createSlice } from '@reduxjs/toolkit'

export const workSlice = createSlice({
  name: 'work',
  initialState: {
    value: [], 
  },
  reducers: {
    increment: (state,work) => {
      state.value.push(work.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = workSlice.actions

export default workSlice.reducer