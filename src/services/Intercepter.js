import axios from 'axios';
import config from '../config';
import {FAILURE} from '_utils/constants/apiConstant';

// Create Instance
const AxiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: 20000,
  transformRequest: [
    function(data, headers) {
      return JSON.stringify(data);
    },
  ],
  headers: {'Content-Type': 'application/json'},
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    debugger;
    const originalRequest = error.config;
    if (!error.response) {
      return Promise.reject({
        status: FAILURE,
        message: 'Please check your internet connection',
      });
    } else {
      return error.response;
    }
  },
);

export default AxiosInstance;
