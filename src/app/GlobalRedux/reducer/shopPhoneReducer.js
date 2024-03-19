import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrCart: [],
};

const shopPhoneReducer = createSlice({
  name: 'shopPhoneReducer',
  initialState,
  reducers: {
    addProductAction: (state, action) => {
      console.log('prd add', action.payload);
      state.arrCart.push(action.payload);
    },
  },
});

export const { addProductAction } = shopPhoneReducer.actions;

export default shopPhoneReducer.reducer;
