import * as api from '../../generated/api';
import { DEVICE_NOT_CONNECTED_ERROR } from '../constants';
import { getConnectionDetails } from '../helpers';
import { TicketDetailsData } from '../models';
import { getServicesAPIInstance } from './api-configuration';


/**
 * Loads ticket details
 * @param  {string} serviceId
 * @returns Promise<TicketDetailsData>
 */
export const loadTicketDetails = async (serviceId: string): Promise<TicketDetailsData> => {
  const apiInstance = getServicesAPIInstance();
  const connectionDetails = await getConnectionDetails();

  if (
    !connectionDetails?.applicationId ||
    !connectionDetails?.accessToken
  ) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }

  const response = await apiInstance.createServiceTurn(
    { customerName: '' },
    +serviceId,
    connectionDetails.applicationId,
    `Bearer ${connectionDetails.accessToken.value}`
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
