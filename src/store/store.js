import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
// import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import tokenReducer, { tokenMiddleware } from './token/tokenReducer';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
