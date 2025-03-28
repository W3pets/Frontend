'use client';

import CloseSellers from '../components/CloseSellers';
import HomeBanner from '@/components/shared/Banner/HomeBanner/HomeBanner';
import styles from './../components/pages/home/styles.module.scss';
import MainCategories from '@/components/pages/home/MainCategories/MainCategories';

const page = () => {
  return (
    <div>
      <HomeBanner />

      <div className={styles.content}>
        <MainCategories />
        <CloseSellers />
      </div>
    </div>
  );
};

export default page;
