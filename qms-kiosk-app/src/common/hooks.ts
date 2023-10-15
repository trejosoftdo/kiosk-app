import { useEffect, useRef, useState } from 'react';

export type Progress<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
};

export const useProgress = <T>(promise: Promise<T>, mapper: (data: any) => T = null): Progress<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setLoading(true);
    promise.then(data => {
      if (mapper) {
        setData(mapper(data));
      } else {
        setData(data);
      }
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

export const useInterval = (callback: () => void, delay: number): void => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const run = () => {
      callbackRef.current();
    };

    if (delay !== null) {
      const interval = setInterval(run, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
};