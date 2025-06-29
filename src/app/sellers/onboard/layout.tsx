'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import { Paths } from '@/model/types/global';
import { SellerDashboardPaths } from '@/model/types/seller';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedRoute
      path="user.auth.user.isSeller"
      isNegative
      redirect_path={`${Paths.Sellers}${SellerDashboardPaths.Dashboard}`}
    >
      {children}
    </ProtectedRoute>
  );
}
