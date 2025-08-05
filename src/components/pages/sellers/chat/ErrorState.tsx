import React from 'react';
import styles from './errorState.module.scss';

export default function ErrorState() {
  return (
    <div className={styles.error}>
      <h2>Chat Not Found</h2>
      <p>The conversation you’re looking for does not exist.</p>
    </div>
  );
}