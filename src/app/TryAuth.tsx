'use client';

import { useEffect, useState } from 'react';
import { authServices } from '@/services/authServices';
import Loader from '@/components/shared/Loader/Loader';

export default function TryAuth({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await authServices.getUserAttempt();
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? <Loader radius={70} isFixed /> : children;
}
