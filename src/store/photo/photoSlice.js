import { createSlice } from '@reduxjs/toolkit';
import { photoRequestAsync } from './photoAction';

const initialState = {
  loading: false,
  photo: {},
  error: '',
  likes: 0,
  likedByUser: false,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    changeLike: (state) => {
      state.likes += state.likedByUser ? -1 : 1;
      state.likedByUser = !state.likedByUser;
    },
  },
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
        state.likedByUser = action.payload.likedByUser;
        state.likes = action.payload.likes;
      })
      .addCase(photoRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { changeLike } = photoSlice.actions;
export default photoSlice.reducer;
