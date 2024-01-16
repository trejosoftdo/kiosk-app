import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';
import { router } from 'expo-router';
import 'react-native-get-random-values';

const KEY = 'SECURE_DEVICE_ID';

const CONNECTION_DETAILS_KEY = 'CONNECTION_DETAILS';

/** 
 * Checks if the platform is web
 * @returns boolean
 */
const isWeb = (): boolean => Platform.OS === 'web';

/**
 * Gets a value from the storage
 * @param  {string} key
 * @returns Promise<string>
 */
const getValue = (key: string): Promise<string> => {
  if (isWeb()) {
    return AsyncStorage.getItem(key);
  }
  return SecureStore.getItemAsync(key);
};

/**
 * Stores a value in the storage
 * @param  {string} key
 * @param  {string} value
 * @returns Promise<void>
 */
const setValue = (key: string, value: string): Promise<void> => {
  if (isWeb()) {
    return AsyncStorage.setItem(key, value);
  }
  return  SecureStore.setItemAsync(key, value);
};

/**
 * Gets the device/installation id
 * @returns Promise<string>
 */
export const getDeviceId = async (): Promise<string> => {
  const fetchUUID = await getValue(KEY);
  const deviceId = fetchUUID || uuidv4();
  await setValue(KEY, deviceId.toString());
  return deviceId;
};

export type ConnectionDetails = {
  applicationId: string;
  deviceCode: string;
  accessToken: {
    value: string;
    expiresAt: number;
  };
  refreshToken: {
    value: string;
    expiresAt: number;
  };
};

/**
 * Saves the connection details
 * 
 * @param  {ConnectionDetails} connectionDetails
 * @returns Promise<void>
 */
export const saveConnectionDetails = async (connectionDetails: ConnectionDetails): Promise<void> => {
  await setValue(CONNECTION_DETAILS_KEY, JSON.stringify(connectionDetails));
};

/**
 * Gets the stored connection details
 * 
 * @returns Promise<ConnectionDetails | undefined>
 */
export const getConnectionDetails = async (): Promise<ConnectionDetails | undefined> => {
  const data = await getValue(CONNECTION_DETAILS_KEY);
  try {
    const details = JSON.parse(data);
    return details as ConnectionDetails;
  } catch (error) {
    return undefined;
  }
};

/**
 * Navigates to a given path
 * 
 * @param  {string} pathname
 * @param  {any} params
 * @returns void
 */
export const goToPath = (pathname: string, params: any): void => {
  router.push({
    pathname,
    params,
  });
};
