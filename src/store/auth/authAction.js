import axios from 'axios';

import { API_URL } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authRequest = createAsyncThunk('auth/fetch', (_, { getState }) => {
  const token = getState().token.token;

  if (!token) return;

  return axios(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data: { name, profile_image: iconImg, username } }) => {
      const img = iconImg.small.replace(/\?.*$/, '');
      const data = { name, img, username };
      return data;
    })
    .catch((error) => {
      console.error('Произошла ошибка: ', error);
      return { error: error.toString() };
    });
});
