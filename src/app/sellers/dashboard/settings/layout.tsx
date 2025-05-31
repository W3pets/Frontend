'use client';

import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/settings.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { Paths } from '@/model/types/global';
import { useState } from 'react';
import {
  SellerDashboardPaths,
  SettingsProductsPaths,
} from '@/model/types/seller';
import { FiUser } from 'react-icons/fi';
import Card from '@/components/shared/Cards/Card';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiLock } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  const paths = Object.values(SettingsProductsPaths);

  const pathIndex = paths.findIndex((p) => pathname.endsWith(p));

  const [left, setLeft] = useState(`${pathIndex * 25}%`);

  const handlePathChange = (index: number) => {
    if (index !== pathIndex) {
      setLeft(`${index * 25}%`);
      router.push(
        `${Paths.Sellers}${SellerDashboardPaths.Settings.split(SettingsProductsPaths.Profile)[0]}${paths[index]}`
      );
    }
  };

  return (
    <div className={`${parentStyles.page}`}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <div className={styles.title}>Settings</div>
          <div className={styles.slogan}>
            Manage your account settings and preferences
          </div>

          <div className={styles.paths}>
            <div className={styles.path} onClick={() => handlePathChange(0)}>
              <FiUser />
              <span>Profile</span>
            </div>
            <div className={styles.path} onClick={() => handlePathChange(1)}>
              <IoMdNotificationsOutline />
              <span>Notifications</span>
            </div>
            <div className={styles.path} onClick={() => handlePathChange(2)}>
              <FiLock />
              <span>Security</span>
            </div>
            <div className={styles.path} onClick={() => handlePathChange(3)}>
              <MdPayment />
              <span>Payment</span>
            </div>
            <div className={styles.indicator} style={{ left }} />
          </div>
        </div>

        {children}
      </Card>
    </div>
  );
}
