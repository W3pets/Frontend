import React from 'react';
import styles from './styles.module.scss';
import ListingForm from '../listings/ListingForm';

function FirstListing() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.title}>Create Your First Listing</div>
        <div className={styles.slogan}>
          Let's get your first pet or livestock listing up and running!
        </div>
      </div>
      <ListingForm />
    </div>
  );
}

export default FirstListing;
