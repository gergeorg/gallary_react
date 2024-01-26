import { createSlice } from '@reduxjs/toolkit';
import { authRequest } from './authAction';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(authRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;
