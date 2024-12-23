import { useEffect } from 'react';

export const useErrorHandling = (error?: string | null, callback?: VoidFunction) => {
  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-alert
      alert(error);
      callback?.();
    }
  }, [error, callback]);
};
