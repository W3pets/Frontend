'use client';

import ProtectedRoute from '@/app/ProtectedRoute';
import { Paths } from '@/model/types/global';
import {
  DashboardProductsPaths,
  SellerDashboardPaths,
  SellerPaths,
} from '@/model/types/seller';
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
import Footer from '@/components/shared/Footer/Footer';
import Button from '@/components/shared/Button/Button';
import { MdOutlineLibraryAdd } from 'react-icons/md';

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
    onclick: () => {},
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
          minDestopWidth={800}
          header={{
            icon: <MdOutlineDashboard />,
            text: 'Abraham',
            tagline: 'Seller Account',
          }}
          children={sidebarMeta}
          pathsIds={Object.values(SellerDashboardPaths).map(
            (p) => `${Paths.Sellers}${p}`
          )}
        />
        <div className={styles.main}>
          <div className={styles.header_bar}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.actions}>
              <Button
                link={`${Paths.Sellers}${SellerDashboardPaths.Messages}${DashboardProductsPaths.New}`}
              >
                <MdOutlineLibraryAdd size={20} />
                <span>New Product</span>
              </Button>
            </div>
          </div>
          {children}
          <Footer isMinInfo />
        </div>
      </div>
    </ProtectedRoute>
  );
}
