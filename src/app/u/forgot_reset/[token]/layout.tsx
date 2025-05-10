import styles from '@/components/pages/auth/styles.module.scss';
import { ImgPaths } from '@/model/types/global';
import Image from 'next/image';
import { MdOutlineShield } from 'react-icons/md';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className={styles.header}>
        <MdOutlineShield fontSize={64} className={styles.icon} />
        <div className={styles.title}>Create New Password</div>
        <div className={styles.slogan}>
          Please enter a strong password for your account.
        </div>
      </div>
      {children}
    </>
  );
}
