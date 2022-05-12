import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
  quantity:0,
  total:0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    productscalc: (state, action) => {
      state.products.push(action.payload)
      state.quantity =+ 1
      state.total += action.payload.price * action.payload.quantity
    },
    clear:(state) => {
      state = 0 
    }
  },
})

// Action creators are generated for each case reducer function
export const {productscalc, clear} = cartSlice.actions

export default cartSlice.reducer