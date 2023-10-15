import { useEffect, useState } from "react";
import { loadServices } from "../common/api";
import { getDeviceId } from "../common/helpers";


const useDeviceId = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDeviceId().then((deviceId) => {
      setData({ deviceId });
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  
  return {
    loading,
    error,
    data,
  };
};

export default useDeviceId;
