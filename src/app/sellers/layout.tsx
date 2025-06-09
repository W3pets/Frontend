'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import { Paths } from '@/model/types/global';
import { AuthPaths } from '@/model/types/user/auth';
import { Suspense } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Suspense>
      <ProtectedRoute
        path="user.auth.isAuth"
        includeCurrentPath
        redirect_path={`${Paths.Auth}${AuthPaths.Login}`}
      >
        {children}
      </ProtectedRoute>
    </Suspense>
  );
}
