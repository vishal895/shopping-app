import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addItems:(state,action)=>{
      state.value.push(action.payload);
    },
    removeItems:(state)=>{
      state.value.pop();
    },
    clearItems:(state)=>{
      state.value.length = 0;
    },
  }
})

// Action creators are generated for each case reducer function
export const { addItems,removeItems,clearItems } = cartSlice.actions

export default cartSlice.reducer