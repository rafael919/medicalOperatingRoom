import {combineReducers} from 'redux';
import dashboardReducer from './modules/dashboard/reducer';

import storage from '@react-native-community/async-storage';

export const logoutRequest = () => ({
  type: 'LOG_OUT',
});

const appReducer = combineReducers({
  dashboardReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUESTED') {
    let fcmToken;
    Object.keys(state).forEach(key => {
      if (key == 'loginReducer') {
        fcmToken = state[key].fcmToken;
      }
      storage.removeItem(`persist:${key}`);
    });
    state = Object.assign({}, initialState);
  }
  return appReducer(state, action);
};

export default rootReducer;
