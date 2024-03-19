'use client';

import { configureStore } from '@reduxjs/toolkit';
import shopPhoneReducer from './reducer/shopPhoneReducer';

export const store = configureStore({
  reducer: {
    shopPhoneReducer: shopPhoneReducer,
  },
});
