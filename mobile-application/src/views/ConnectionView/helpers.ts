import { ConnectionData, ConnectionDetails } from "../../common/models";

/**
 * Gets the correct message key from the data state
 * 
 * @param  {ConnectionData} data
 * @returns string
 */
export const getMessageKey = (data: ConnectionData, connectionDetails?: ConnectionDetails): string => {
  if (connectionDetails?.accessToken) {
    return 'translation:alreadyConnectedMessage';
  }

  if (data?.tokens?.accessToken) {
    return 'translation:successConnectionMessage';
  }

  return data?.userCode ? 'translation:toConnectMessage' : 'translation:initialConnetMessage';
};
