/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
