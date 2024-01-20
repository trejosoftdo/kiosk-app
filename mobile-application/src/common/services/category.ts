import * as api from '../../generated/api';
import { CategoriesData } from '../models';
import { getConnectionDetails } from '../helpers';
import { APP_PROTO, DEVICE_NOT_CONNECTED_ERROR } from '../constants';
import { getCategoriesAPIInstance } from './api-configuration';

/**
 * Load categories data
 * @returns Promise<CategoriesData>
 */
export const loadCategories = async (): Promise<CategoriesData> => {
  const apiInstance = getCategoriesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (
    !connectionDetails?.applicationId ||
    !connectionDetails?.accessToken
  ) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.getCategories(
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
    })),
  };
};
