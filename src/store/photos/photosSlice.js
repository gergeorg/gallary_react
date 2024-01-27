import { createSlice } from '@reduxjs/toolkit';
import { photosRequestAsync } from './photosAction';

const initialState = {
  loading: false,
  photos: [],
  error: '',
  count: 20,
  page: 1,
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    firstPhotos: (state) => {
      state.photos = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(photosRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(photosRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload.photos || [];
        state.error = action.payload.error || '';
        state.page += 1;
      })
      .addCase(photosRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { firstPhotos } = photosSlice.actions;

export default photosSlice.reducer;
