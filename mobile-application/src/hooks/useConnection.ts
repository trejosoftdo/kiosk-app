import { useEffect, useState } from "react";
import { Progress, useInterval } from "../common/hooks";
import { DeviceAuthData, DeviceConnectionData, connectDevice, getTokensForDevice } from "../common/api";

export type ConnectionData = DeviceConnectionData & {
  tokens?: DeviceAuthData;
};

export type ConnectionResult = Progress<ConnectionData> & {
  connect: (applicationId: string) => void;
};

/**
 * Hook used to connect the device
 * 
 * @returns ConnectionResult
 */
const useConnection = (): ConnectionResult => {
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useInterval(() => {
      if (data?.deviceCode && applicationId && !data?.tokens.accessToken) {
        getTokensForDevice(applicationId, data?.deviceCode)
          .then((tokens) => {
            setData({
              ...data,
              tokens,
            });
          }).catch((error) => {
            setError(error);
          })
      }
      // TODO: Add expiration logic
  }, 10000);

  const connect = (appId: string): void => {
    setLoading(true);
    setApplicationId(appId);
    connectDevice(appId).then(data => {
      setData(data);
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  };
  
  return {
    loading,
    error,
    data,
    connect,
  };
};

export default useConnection;
