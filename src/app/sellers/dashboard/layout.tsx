'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import { Paths } from '@/model/types/global';
import { SellerDashboardPaths, SellerPaths } from '@/model/types/seller';
import styles from '@/components/pages/sellers/dashboard/styles.module.scss';
import Sidebar, { Child } from '@/components/shared/Sidebar/Sidebar';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { LuMessageSquare } from 'react-icons/lu';
import { SiSimpleanalytics } from 'react-icons/si';
import { RiNotification3Line } from 'react-icons/ri';
import { MdOutlineHeadphones } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

const sidebarMeta = [
  {
    icon: <MdOutlineDashboard />,
    text: 'Dashboard',
  },
  {
    icon: <AiOutlineProduct />,
    text: 'Product',
  },
  {
    icon: <LuMessageSquare />,
    text: 'Messages',
  },
  {
    icon: <SiSimpleanalytics />,
    text: 'Analytics',
  },
  {
    icon: <RiNotification3Line />,
    text: 'Notifications',
  },
  {
    icon: <MdOutlineHeadphones />,
    text: 'Customer Support',
  },
  {
    icon: <IoSettingsOutline />,
    text: 'Settings',
  },
  {
    icon: <MdLogout />,
    text: 'Logout',
    isLast: true,
  },
] as Child[];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedRoute
      path="user.auth.user.isSeller"
      includeCurrentPath
      isNegative
      redirect_path={`${Paths.Sellers}${SellerPaths.PreviewTerms}`}
    >
      <div className={styles.dashboard}>
        <Sidebar
          minDestopWidth={600}
          header={{
            icon: <MdOutlineDashboard />,
            text: 'Abraham',
            tagline: 'Seller Account',
          }}
          children={sidebarMeta}
        />
        {children}
      </div>
    </ProtectedRoute>
  );
}
