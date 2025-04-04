'use client';

import React, { useState } from 'react';
import styles from '@/components/pages/sellers/register/styles.module.scss';
import { Steps } from 'antd';
import Verification from '@/components/pages/sellers/register/Verification';
import Profile from '@/components/pages/sellers/register/Profile';
import UpdateListing from '@/components/pages/sellers/listings/ListingForm';
import FirstListing from '@/components/pages/sellers/register/FirstListing';

const sellerProgress = [
  { title: 'Profile' },
  { title: 'Verification' },
  { title: 'First Listing' },
];

function page() {
  const [progress, setProgress] = useState(0);
  const handleStepChange = (newStep: number) => {
    setProgress(newStep);
  };

  return (
    <div className={styles.register_seller_wrapper}>
      <div className={styles.progress}>
        <Steps
          current={progress}
          percent={progress ? (progress == 1 ? 50 : 100) : 0}
          onChange={handleStepChange}
          labelPlacement="vertical"
          responsive={false}
          items={sellerProgress}
          size="small"
        />
      </div>
      {!progress && <Profile />}
      {progress == 1 && <Verification />}
      {progress == 2 && <FirstListing />}
    </div>
  );
}

export default page;
