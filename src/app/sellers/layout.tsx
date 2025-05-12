'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import { Paths } from '@/model/types/global';
import { AuthPaths } from '@/model/types/user/auth';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedRoute
      redirect_path={`${Paths.Auth}${AuthPaths.Login}`}
      isAuthCheck
    >
      {children}
    </ProtectedRoute>
  );
}
