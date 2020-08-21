import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from './types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
