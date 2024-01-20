import { useEffect, useState, useRef } from "react";
import { Progress, useInterval } from "../common/hooks";
import { DeviceAuthData, DeviceConnectionData } from "../common/models";
import { connectDevice, getTokensForDevice } from "../common/services/auth";
import { getConnectionDetails, saveConnectionDetails } from "../common/device-connection";
import { getCurrentTime } from "../common/helpers";
import { EMPTY_VALUE, INTERVAL_TIME, ONE_SECOND_MILISECONDS } from "../common/constants";


/**
 * Calculates the expire time
 * 
 * @param  {number} expiresIn
 * @returns number
 */
const calculateExpireTime = (expiresIn: number): number => getCurrentTime() + expiresIn * ONE_SECOND_MILISECONDS;

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
                expiresAt: calculateExpireTime(tokens.expiresIn),
              },
              refreshToken: {
                value: tokens.refreshToken,
                expiresAt: calculateExpireTime(tokens.refreshExpiresIn),
              },
            });
          }
        }).catch((error) => {
          setError(error);
        });
    }

    const currentTime = getCurrentTime();
    if (interval.clear && ((expireTime && currentTime >= expireTime) || data?.tokens?.accessToken)) {
      interval.clear();
    }
  }, INTERVAL_TIME);

  const connect = (appId: string): void => {
    setLoading(true);
    setApplicationId(appId);
    setError(null);
    connectDevice(appId).then(data => {
      setData(data);
      setExpireTime(calculateExpireTime(data.expiresIn));
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  const clear = () => {
    setLoading(false);
    setApplicationId(EMPTY_VALUE);
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
