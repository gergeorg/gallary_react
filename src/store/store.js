import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import photosReducer from './photos/photosSlice';
import photoReducer from './photo/photoSlice';
import tokenReducer, { tokenMiddleware } from './token/tokenReducer';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
    photo: photoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
