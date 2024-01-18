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

const getServicesAPIInstance = () => new api.ServicesApi(getConfiguration());

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
  const apiInstance = getCategoriesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (!connectionDetails?.applicationId) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.getCategoryServices(categoryId, connectionDetails.applicationId);

  return {
    total: response.length,
    items: response.map(item => ({
      id: item.id.toString(),
      name: item.name,
      label: item.name,
      icon: item.iconUrl.replace(APP_PROTO, ''),
      categoryId,
    })),
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

  const response = await apiInstance.getCategories(connectionDetails.applicationId);

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
 * @param  {string} serviceId
 * @returns Promise<TicketDetailsData>
 */
export const loadTicketDetails = async (serviceId: string): Promise<TicketDetailsData> => {
  const apiInstance = getServicesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (!connectionDetails?.applicationId) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.createServiceTurn(
    { customerName: '' },
    +serviceId,
    connectionDetails.applicationId
  );

  return {
    details: {
      id: response.id,
      service: serviceId,
      value: response.ticketNumber,
    },
    usersInQueue: response.peopleInQueue,
  };
};


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