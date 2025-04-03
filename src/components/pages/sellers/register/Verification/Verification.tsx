import React from 'react';
import styles from '../styles.module.scss';
import { MdOutlineShield } from 'react-icons/md';

function Verification() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <MdOutlineShield />
        <div className={styles.title}>Verify Your Identity</div>
        <div className={styles.slogan}>
          To ensure trust and safety in our marketplace, we need to verify your
          identity.
        </div>
      </div>
    </div>
  );
}

export default Verification;
