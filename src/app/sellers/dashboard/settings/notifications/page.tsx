import MultiChecked from '@/components/shared/Inputs/MultiChecked/MultiChecked';
import styles from '@/components/pages/sellers/dashboard/settings.module.scss';
import { useMemo } from 'react';

function page() {
  return (
    <div className={styles.not_page}>
      <section>
        <h3>Email Notifications</h3>
        <MultiChecked
          items={[
            { id: 0, name: 'New messages from buyers' },
            { id: 1, name: 'Order updates' },
            { id: 2, name: 'List status changes' },
            { id: 3, name: 'Marketing and newsletters' },
          ]}
        />
      </section>
      <section>
        <h3>Push Notifications</h3>
        <MultiChecked
          items={[
            { id: 0, name: 'New messages' },
            { id: 1, name: 'New orders' },
            { id: 2, name: 'Listing updates' },
          ]}
        />
      </section>
    </div>
  );
}

export default page;
