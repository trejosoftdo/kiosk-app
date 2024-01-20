import { Platform } from 'react-native';
import { router } from 'expo-router';
import { WEB_PLATFORM } from './constants';

/** 
 * Checks if the platform is web
 * @returns boolean
 */
export const isWeb = (): boolean => Platform.OS === WEB_PLATFORM;

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
