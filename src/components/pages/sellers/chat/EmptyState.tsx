import React from 'react';
import styles from './emptyState.module.scss';

export default function EmptyState() {
  return (
    <div className={styles.empty}>
      <p>Select a conversation to start chatting.</p>
    </div>
  );
}