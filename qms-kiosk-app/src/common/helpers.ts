import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';
import { router } from 'expo-router';
import 'react-native-get-random-values';


const KEY = 'SECURE_DEVICE_ID';

const isWeb = () => Platform.OS === 'web';

const getValue = (key) => {
  if (isWeb()) {
    return AsyncStorage.getItem(key);
  }
  return SecureStore.getItemAsync(key);
};

const setValue = (key, value) => {
  if (isWeb()) {
    return AsyncStorage.setItem(key, value);
  }
  return  SecureStore.setItemAsync(key, value);
};


export const getDeviceId = async () => {
  const fetchUUID = await getValue(KEY);
  const deviceId = fetchUUID || uuidv4();
  await setValue(KEY, deviceId.toString());
  return deviceId;
};


export const goToPath = (pathname: string, params: any): void => {
  router.push({
    pathname,
    params,
  });
};
