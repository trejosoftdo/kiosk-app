import { useEffect, useState } from "react";
import { loadServices } from "../common/api";

const useServices = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    loadServices().then(data => {
      setData(data);
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

export default useServices;
