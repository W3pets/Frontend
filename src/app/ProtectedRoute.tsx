'use client';

import { useAppSelector } from '@/lib/store/hooks';
import { useLayoutEffect, useState } from 'react';
import Loader from '@/components/shared/Loader/Loader';
import { redirect, usePathname } from 'next/navigation';

export default function ProtectedRoute({
  isAuthCheck = true,
  redirect_path = '/',
  children,
}: {
  isAuthCheck?: boolean;
  redirect_path?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const user = useAppSelector((s) => s.user.auth);

  useLayoutEffect(() => {
    if (isAuthCheck) {
      if (!user.isAuth) {
        setIsLoading(false);
        redirect(`${redirect_path}?redirect=${encodeURIComponent(pathname)}`);
      }
    } else {
      if (user.isAuth) {
        setIsLoading(false);
        redirect(redirect_path);
      }
    }
    setIsLoading(false);
  }, [user.isAuth]);

  return isLoading ? <Loader radius={70} isFixed /> : children;
}
