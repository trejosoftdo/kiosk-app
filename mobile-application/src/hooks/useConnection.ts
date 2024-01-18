import { useEffect, useState, useRef } from "react";
import { Progress, useInterval } from "../common/hooks";
import { DeviceAuthData, DeviceConnectionData, connectDevice, getTokensForDevice } from "../common/api";
import { getConnectionDetails, saveConnectionDetails } from "../common/helpers";

export type ConnectionData = DeviceConnectionData & {
  tokens?: DeviceAuthData;
};

export type ConnectionResult = Progress<ConnectionData> & {
  connect: (applicationId: string) => void;
  clear: () => void;
  connectionDetails?: ConnectionDetails;
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
  const [connectionDetails, setConnectionDetails] = useState({});
  const [expireTime, setExpireTime] = useState(null);

  useEffect(() => {
    setLoading(true);
    getConnectionDetails().then(details => {
      if (details) {
        setConnectionDetails(details);
      }
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  useInterval((interval) => {
    if (data?.deviceCode && applicationId && !data?.tokens?.accessToken) {
      getTokensForDevice(applicationId, data?.deviceCode)
        .then((tokens) => {
          setData({
            ...data,
            tokens,
          });

          if (
            tokens.accessToken &&
            tokens.expiresIn &&
            tokens.refreshToken &&
            tokens.refreshExpiresIn
          ) {
            return saveConnectionDetails({
              applicationId,
              deviceCode: data?.deviceCode,
              accessToken: {
                value: tokens.accessToken,
                expiresAt: new Date().getTime() + tokens.expiresIn * 1000,
              },
              refreshToken: {
                value: tokens.refreshToken,
                expiresAt: new Date().getTime() + tokens.refreshExpiresIn * 1000,
              },
            });
          }
        }).catch((error) => {
          setError(error);
        });
    }

    const currentTime = new Date().getTime();
    if (interval.clear && ((expireTime && currentTime >= expireTime) || data?.tokens?.accessToken)) {
      interval.clear();
    }
  }, 10000);

  const connect = (appId: string): void => {
    setLoading(true);
    setApplicationId(appId);
    setError(null);
    connectDevice(appId).then(data => {
      setData(data);
      setExpireTime(new Date().getTime() + data.expiresIn * 1000);
    }).catch((error) => {
      console.log(error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  const clear = () => {
    setLoading(false);
    setApplicationId('');
    setError(null);
    setData({});
    setExpireTime(null);
    setConnectionDetails({});
  };

  return {
    loading,
    error,
    data,
    connect,
    clear,
    connectionDetails,
  };
};

export default useConnection;
