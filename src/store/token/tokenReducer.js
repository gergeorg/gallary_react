import { setToken } from '../../api/token';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = '';
    },
  },
});

export const { updateToken, deleteToken } = tokenSlice.actions;

export const tokenMiddleware = (store) => (next) => (action) => {
  if (action.type === updateToken.type) {
    setToken(action.payload);
  }

  if (action.type === deleteToken.type) {
    setToken('');
  }

  next(action);
};

export default tokenSlice.reducer;
