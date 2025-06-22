import { useEffect, useRef, useState } from "react";

export const useTimeout = (seconds: number, callBack?: () => void) => {
  const [remainingTime, setRemainingTime] = useState(seconds);
  const isReady = remainingTime <= 0;

  const callbackRef = useRef(callBack);
  useEffect(() => {
    callbackRef.current = callBack;
  }, [callBack]);

  useEffect(() => {
    if (isReady) {
      callbackRef.current?.();
      return;
    }

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isReady]);

  return { isReady, remainingTime };
};
