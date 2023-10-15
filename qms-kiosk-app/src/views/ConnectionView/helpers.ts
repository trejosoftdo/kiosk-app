import { ConnectionData } from "../../hooks/useConnection";

/**
 * Gets the correct message key from the data state
 * 
 * @param  {ConnectionData} data
 * @returns string
 */
export const getMessageKey = (data: ConnectionData): string => {
  if (data?.tokens) {
    return 'translation:successConnectionMessage';
  }

  return data?.userCode ? 'translation:toConnectMessage' : 'translation:initialConnetMessage';
};
