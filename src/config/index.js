import { Platform } from 'react-native';
import {
  API_URL,
  BASE_URL,
  IOS_ANALYTICS_KEY,
  ANDROID_ANALYTICS_KEY,
} from 'react-native-dotenv';

export default {
  API_URL,
  BASE_URL,
  ANALYTICS_KEY: Platform.select({
    ios: IOS_ANALYTICS_KEY,
    android: ANDROID_ANALYTICS_KEY,
  }),
};