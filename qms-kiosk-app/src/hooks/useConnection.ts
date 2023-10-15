import { useEffect, useState } from "react";
import { Progress, useInterval } from "../common/hooks";
import { DeviceAuthData, DeviceConnectionData, connectDevice, getTokensForDevice } from "../common/api";

export type ConnectionData = DeviceConnectionData & {
  tokens?: DeviceAuthData;
};

export type ConnectionResult = Progress<ConnectionData> & {
  connect: (applicationId: string) => void;
};

const useConnection = (): ConnectionResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useInterval(() => {
      if (data?.deviceCode) {
        getTokensForDevice(data?.deviceCode)
          .then((tokens) => {
            setData({
              ...data,
              tokens,
            });
          }).catch((error) => {
            setError(error);
          })
      }

  }, 3000);

  const connect = (applicationId: string): void => {
    setLoading(true);
    connectDevice(applicationId).then(data => {
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
