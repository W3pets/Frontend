'use client';

import React, { useState } from 'react';
import styles from '@/components/pages/sellers/register/styles.module.scss';
import { Steps } from 'antd';
import Verification from '@/components/pages/sellers/register/Verification/Verification';
import Profile from '@/components/pages/sellers/register/Profile/Profile';

const sellerProgress = [{ title: 'Profile' }, { title: 'Verification' }];

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
          percent={progress ? 50 : 0}
          onChange={handleStepChange}
          labelPlacement="vertical"
          items={sellerProgress}
        />
      </div>
      {!progress && <Profile />}
      {!!progress && <Verification />}
    </div>
  );
}

export default page;
