'use client';

import authSlice from '@/lib/store/slices/user/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '@/components/pages/auth/styles.module.scss';

function page() {
  const dispatch = useDispatch();
  const setJustRegistered = authSlice.actions.setJustRegistered;

  useEffect(() => {
    return () => {
      dispatch(setJustRegistered(''));
    };
  }, []);
  return (
    <div className={styles.email_verification}>
      <div className={styles.background} />
      <div>Next Steps:</div>
      <ul className={styles.alerts}>
        <li>• Check your email inbox for a message from us</li>
        <li>• Click on the verification link in the email</li>
        <li>• You'll be redirected back to complete the process</li>
      </ul>
    </div>
  );
}

export default page;
