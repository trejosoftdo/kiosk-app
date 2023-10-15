import { useRef, useEffect } from 'react';

const useInterval = (callback, delay) => {
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

export default useInterval;
