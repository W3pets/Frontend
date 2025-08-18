'use client';

import { Suspense } from 'react';
import Search from './search';
import styles from '@/components/pages/search/styles.module.scss';
import Filter from '@/components/shared/Filter/Filter';
const SearchPage = () => {
  return (
    <div className={styles.search_page}>
      <div className={styles.sidebar}>
        {/* Placeholder for filters. Will replace with actual Filter component */}
        <Filter />
      </div>

      <div className={styles.main_content}>
        <Suspense fallback={<div>Loading search results...</div>}>
          <Search />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;