import * as api from '../generated/api';

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

// TODO: Read from env vars/config
const getAPIInstance = () => new api.AuthApi(new api.Configuration({
  basePath: 'http://localhost:5000',
}));

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
  await delay(2000);
  return {
    total: 3,
    items: [
      {
        id: 'category-1',
        name: 'results',
        label: 'Categoria I',
        icon: 'file-multiple',
      },
      {
        id: 'category-2',
        name: 'analysis',
        label: 'Categoria II',
        icon: 'poll',
      },
      {
        id: 'category-3',
        name: 'information',
        label: 'Categoria III',
        icon: 'information',
      },
      {
        id: 'category-4',
        name: 'cat4',
        label: 'Categoria IV',
        icon: 'web',
      }
    ],
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
 * @param  {string} realm 
 * @returns Promise<DeviceConnectionData>
 */
export const connectDevice = async (realm: string): Promise<DeviceConnectionData> => {
  const apiInstance = getAPIInstance();
  const response = await apiInstance.authorizeDeviceAuthRealmDeviceGet(realm);
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
* @param  {string} realm 
* @param  {string} deviceCode
 * @returns Promise<DeviceAuthData>
 */
export const getTokensForDevice = async (realm: string, deviceCode: string): Promise<DeviceAuthData> => {
  try {
    const apiInstance = getAPIInstance();
    const response = await apiInstance.getAuthTokensAuthRealmTokensPost({
      deviceCode,
    }, realm);

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