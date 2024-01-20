import * as api from '../../generated/api';
import { DeviceAuthData, DeviceConnectionData } from '../models';
import { AUTHORIZATION_PENDING_CODE, VALIDATION_ERROR_STATUS_CODE } from '../constants';
import { getAuthAPIInstance } from './api-configuration';


/**
 * Connects a device
 * @param  {string} applicationId 
 * @returns Promise<DeviceConnectionData>
 */
export const connectDevice = async (applicationId: string): Promise<DeviceConnectionData> => {
  const apiInstance = getAuthAPIInstance();
  const response = await apiInstance.authorizeDevice(applicationId);
  return {
    deviceCode: response.data.deviceCode,
    userCode: response.data.userCode,
    interval: response.data.interval,
    expiresIn: response.data.expiresIn,
    verificationURI: response.data.verificationURI,
  };
};

/**
 * Gets the tokens for the device
* @param  {string} applicationId 
* @param  {string} deviceCode
 * @returns Promise<DeviceAuthData>
 */
export const getTokensForDevice = async (applicationId: string, deviceCode: string): Promise<DeviceAuthData> => {
  try {
    const apiInstance = getAuthAPIInstance();
    const response = await apiInstance.getAuthTokens({
      deviceCode,
    }, applicationId);

    return {
      refreshToken: response.data.refreshToken,
      accessToken: response.data.accessToken,
      refreshExpiresIn: response.data.refreshExpiresIn,
      expiresIn: response.data.expiresIn,
    };
  } catch(error) {
    if (error?.status === VALIDATION_ERROR_STATUS_CODE) {
      const data = await error.json();
      if (data?.detail?.code === AUTHORIZATION_PENDING_CODE) {
        return { pending: true };
      }
    }
    throw error;
  }
};
