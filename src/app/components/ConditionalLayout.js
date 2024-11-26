"use client"; // This component must be a client component

import { usePathname } from 'next/navigation';
import MainLayout from './MainLayout';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Define paths where the header and footer should be hidden
  const authRoutes = ['/login', '/register', '/shop', '/admin', '/shop/onboarding', '/shop/productdetails'];

  // If the pathname is one of the auth routes, render only children
  if (authRoutes.includes(pathname)) {
    return <>{children}</>;
  }

  // Otherwise, render the MainLayout
  return <MainLayout>{children}</MainLayout>;
}
