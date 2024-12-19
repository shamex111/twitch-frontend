import { SERVER_URL } from '../routes';
import axios, { type CreateAxiosDefaults } from 'axios';

const optionsForBack: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
};


export const axiosAPI = axios.create(optionsForBack);

