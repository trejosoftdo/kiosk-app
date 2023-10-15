import { useEffect, useState } from "react";
import { useInterval } from "../common/hooks";
import { connectDevice, getTokensForDevice } from "../common/api";

const useConnection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useInterval(() => {
      if (data?.deviceCode) {
        getTokensForDevice(data?.deviceCode)
          .then((tokens) => {
            console.log(tokens);
            setData({
              ...data,
              tokens,
            });
          }).catch((error) => {
            setError(error);
          })
      }

  }, 3000);

  const connect = (applicationId) => {
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
