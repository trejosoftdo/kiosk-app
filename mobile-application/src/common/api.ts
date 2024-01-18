import * as api from '../generated/api';
import { getConnectionDetails } from './helpers';

// TODO: Move to a models file
export type ServicesData = {
  total: number;
  items: {
    id: string;
    name: string;
    label: string;
    icon: string;
  }[];
};

export type TicketDetailsData = {
  details: {
    id: string;
    service: string;
    value: string;
  };
  usersInQueue: number;
};

export type DeviceConnectionData = {
  deviceCode?: string;
  userCode?: string;
  interval?: number;
  expiresIn?: number;
  verificationURI?: string;
};

export type DeviceAuthData = {
  refreshToken?: string;
  accessToken?: string;
  refreshExpiresIn?: number;
  expiresIn?: number;
  pending?: boolean;
};

const AUTHORIZATION_PENDING_CODE = 'authorization_pending';

const DEVICE_NOT_CONNECTED_ERROR = new Error('Device is not connected');

const APP_PROTO = 'app://';


// TODO: Read from env vars/config
const getConfiguration = () => new api.Configuration({
  basePath: 'http://localhost:5000',
});

const getAuthAPIInstance = () => new api.AuthApi(getConfiguration());

const getCategoriesAPIInstance = () => new api.CategoriesApi(getConfiguration());

/**
 * To simulate a delay
 * @param  {NoSubstitutionTemplateLiteral} timeout
 * @returns Promise<void>
 */
const delay = (timeout: number): Promise<void> => new Promise((resolve): void => {
  setTimeout(resolve, timeout);
});


/**
 * Load services data
 * @returns Promise<ServicesData>
 */
export const loadServices = async (categoryId: number): Promise<ServicesData> => {
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'results-id',
        name: 'results',
        label: 'Resultados',
        icon: 'file-multiple',
        categoryId,
      },
      {
        id: 'analysis-id',
        name: 'analysis',
        label: 'Analisis',
        icon: 'poll',
        categoryId,
      },
      {
        id: 'information-id',
        name: 'information',
        label: 'Informacion',
        icon: 'information',
        categoryId,
      },
      {
        id: 'general-id',
        name: 'general',
        label: 'General',
        icon: 'web',
        categoryId,
      }
    ],
  };
};

/**
 * Load categories data
 * @returns Promise<CategoriesData>
 */
export const loadCategories = async (): Promise<CategoriesData> => {
  const apiInstance = getCategoriesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (!connectionDetails?.applicationId) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.getCategoriesApiV1CategoriesGet(connectionDetails?.applicationId);

  return {
    total: response.length,
    items: response.map(item => ({
      id: item.id.toString(),
      name: item.name,
      label: item.name,
      icon: item.iconUrl.replace(APP_PROTO, ''),
    })),
  };
};

/**
 * Loads ticket details
 * @param  {string} service
 * @returns Promise<TicketDetailsData>
 */
export const loadTicketDetails = async (service: string): Promise<TicketDetailsData> => {
  await delay(2000);
  const time = new Date().getTime().toString(); 
  return {
    details: {
      id: 'ticket-id',
      service,
      value: `${service.slice(0, 2).toUpperCase()}-${time.slice(time.length - 3)}`,
    },
    usersInQueue: 10,
  };
};


/**
 * Connects a device
 * @param  {string} applicationId 
 * @returns Promise<DeviceConnectionData>
 */
export const connectDevice = async (applicationId: string): Promise<DeviceConnectionData> => {
  const apiInstance = getAuthAPIInstance();
  const response = await apiInstance.authorizeDeviceApiV1AuthDeviceGet(applicationId);
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
    const response = await apiInstance.getAuthTokensApiV1AuthTokensPost({
      deviceCode,
    }, applicationId);

    return {
      refreshToken: response.data.refreshToken,
      accessToken: response.data.accessToken,
      refreshExpiresIn: response.data.refreshExpiresIn,
      expiresIn: response.data.expiresIn,
    };
  } catch(error) {
    if (error?.status === 400) {
      const data = await error.json();
      if (data?.detail?.code === AUTHORIZATION_PENDING_CODE) {
        return {
          pending: true,
        };
      }
    }
    throw error;
  }
};