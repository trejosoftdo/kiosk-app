import * as api from '../../generated/api';
import { APP_PROTO, DEVICE_NOT_CONNECTED_ERROR } from '../constants';
import { getConnectionDetails } from '../helpers';
import { ServicesData } from '../models';
import { getCategoriesAPIInstance } from './api-configuration';

/**
 * Load services data
 * @returns Promise<ServicesData>
 */
export const loadServices = async (categoryId: number): Promise<ServicesData> => {
  const apiInstance = getCategoriesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (
    !connectionDetails?.applicationId ||
    !connectionDetails?.accessToken
  ) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.getCategoryServices(
    categoryId,
    connectionDetails.applicationId,
    `Bearer ${connectionDetails.accessToken.value}`
  );

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
