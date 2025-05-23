import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/landing.module.scss';
import AnalyticsCard from '@/components/shared/Cards/AnaltyicsCard/AnalyticsCard';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import { FiMessageSquare } from 'react-icons/fi';
import { Paths } from '@/model/types/global';
import {
  DashboardProductsPaths,
  SellerDashboardPaths,
} from '@/model/types/seller';

function page() {
  return (
    <div className={parentStyles.page}>
      <div className={styles.summary}>
        <AnalyticsCard
          color="info"
          title={{ icon: <MdOutlineRemoveRedEye /> }}
          action={{ title: '+0%' }}
          metric={{ title: 'Today"s views', value: `0` }}
        />
        <AnalyticsCard
          title={{ icon: <IoBagCheckOutline /> }}
          color="primary"
          action={{
            title: 'New',
            link: `${Paths.Sellers}${SellerDashboardPaths.Messages}${DashboardProductsPaths.New}`,
          }}
          metric={{ title: 'Active Products', value: `1` }}
        />
        <AnalyticsCard
          title={{ icon: <FiMessageSquare /> }}
          action={{
            title: 'Unread',
            link: `${Paths.Sellers}${SellerDashboardPaths.Messages}`,
          }}
          metric={{ title: 'Messages', value: `3` }}
        />
        <AnalyticsCard
          title={{ title: '₦' }}
          action={{ title: 'Start selling' }}
          metric={{ title: 'Total Sales', value: `₦0` }}
        />
      </div>
    </div>
  );
}

export default page;
