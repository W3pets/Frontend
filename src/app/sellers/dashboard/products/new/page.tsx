'use client';

import { IoArrowBack } from 'react-icons/io5';
import styles from '@/components/pages/sellers/dashboard/product_subpages_styles.module.scss';
import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import { useRouter } from 'next/navigation';
import Card from '@/components/shared/Cards/Card';
import ListingForm from '@/components/pages/sellers/listings/ListingForm';
function page() {
  const router = useRouter();

  return (
    <div className={`${styles.product_page} ${parentStyles.page}`}>
      <div className={styles.back}>
        <div className={styles.click} onClick={() => router.back()}>
          <IoArrowBack />
          <span>Back</span>
        </div>
      </div>
      <Card maxWidth={1000}>
        <ListingForm />
      </Card>
    </div>
  );
}

export default page;
