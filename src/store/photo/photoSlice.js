import { createSlice } from '@reduxjs/toolkit';
import { photoRequestAsync } from './photoAction';

const initialState = {
  loading: false,
  photo: {},
  error: '',
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(photoRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(photoRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload.photo;
        state.error = action.payload.error;
      })
      .addCase(photoRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default photoSlice.reducer;
