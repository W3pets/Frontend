'use client';

import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/product_subpages_styles.module.scss';
import { use } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import ListingForm from '@/components/pages/sellers/listings/ListingForm';
import Card from '@/components/shared/Cards/Card';

function page(props: { params: Promise<{ productId: string }> }) {
  const params = use(props.params);
  const router = useRouter();

  const { productId } = params;

  return (
    <div className={`${styles.product_page} ${parentStyles.page}`}>
      <div className={styles.back} onClick={() => router.back()}>
        <IoArrowBack />
        <span>Back</span>
      </div>
      <Card maxWidth={1000}>
        <ListingForm />
      </Card>
    </div>
  );
}

export default page;
