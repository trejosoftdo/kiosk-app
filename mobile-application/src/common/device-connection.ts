import { v4 as uuidv4 } from 'uuid';
import { ConnectionDetails } from './models';
import { CONNECTION_DETAILS_KEY, CONNECTION_EXPIRED_ERROR_MESSAGE, DEVICE_ID_KEY } from './constants';
import { DEVICE_NOT_CONNECTED_ERROR } from './errors';
import { getValue, setValue } from './store';


/**
 * Gets the device/installation id
 * @returns Promise<string>
 */
export const getDeviceId = async (): Promise<string> => {
  const fetchUUID = await getValue(DEVICE_ID_KEY);
  const deviceId = fetchUUID || uuidv4();
  await setValue(DEVICE_ID_KEY, deviceId.toString());
  return deviceId;
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
  try {
    const data = await getValue(CONNECTION_DETAILS_KEY);
    const details = JSON.parse(data);
    return details as ConnectionDetails;
  } catch (error) {
    return undefined;
  }
};

const hasExpired = ({ expiresAt }: { expiresAt: number }): boolean => {
  const currentTime = new Date().getTime();

  console.log({
    expiresAt,
    currentTime,
    hasAccesTokenExpired: currentTime > expiresAt,
  });
  return currentTime > expiresAt;
};

/**
 * Gets the device auth headers to consume the APIs
 * 
 * @returns AuthHeaders
 */
export const getDeviceAuthHeaders = async (): AuthHeaders => {
  const connectionDetails = await getConnectionDetails();

  if (
    !connectionDetails?.applicationId ||
    !connectionDetails?.accessToken
  ) {
    throw DEVICE_NOT_CONNECTED_ERROR;
  }


  if (hasExpired(connectionDetails.accessToken)) {
    if (hasExpired(connectionDetails.refreshToken)) {
      console.log("Both access and refresh token expired");
      throw CONNECTION_EXPIRED_ERROR_MESSAGE;
    }

    console.log("Renewing token");
    connectionDetails.accessToken = await getNewAccessToken(
      connectionDetails.applicationId,
      connectionDetails.refreshToken.value,
    );
    await saveConnectionDetails(connectionDetails);
  }

  return {
    applicationId: connectionDetails.applicationId,
    authorization: `Bearer ${connectionDetails.accessToken.value}`,
  };
};
