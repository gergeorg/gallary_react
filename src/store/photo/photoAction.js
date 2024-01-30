import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY, API_URL_PHOTOS } from '../../api/const';

export const photoRequestAsync = createAsyncThunk(
  'photo/fetch',
  (id, { getState }) => {
    const token = getState().token.token;
    const headers = {};

    const url = new URL(API_URL_PHOTOS);
    url.searchParams.set('client_id', ACCESS_KEY);
    url.pathname += `/${id}`;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return axios
      .get(url.href, {
        headers,
      })
      .then(({ data }) => {
        const likes = data.likes;
        const likedByUser = data.liked_by_user;
        return { photo: data, likes, likedByUser };
      })
      .catch((error) => ({ error: error.toString() }));
  },
);
