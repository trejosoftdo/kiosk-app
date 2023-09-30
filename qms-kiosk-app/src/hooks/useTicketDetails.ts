import { useEffect, useState } from "react";
import { loadTicketDetails } from "../common/api";

const useTicketDetails = (service) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    loadTicketDetails(service).then(data => {
      setData(data);
    }).catch((error) => {
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [service]);
  
  return {
    loading,
    error,
    data,
  };
};

export default useTicketDetails;
