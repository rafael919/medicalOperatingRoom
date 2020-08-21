import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from './types';

export const getAllDataRequest= (data) => ({
  type: GET_DATA_REQUEST,
  data
});

export const getAllDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  data,
});
export const getAllDataFail = () => ({
  type: GET_DATA_FAILURE,
});

