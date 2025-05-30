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
import SelllerProductCard from '@/components/shared/Cards/SellerProductCard/SelllerProductCard';
import { productsSeed } from '../products/page';
import Card from '@/components/shared/Cards/Card';
import { LuBadgeCheck } from 'react-icons/lu';
import { RxPerson } from 'react-icons/rx';
import { FiPlusSquare } from 'react-icons/fi';
import { IoAnalytics } from 'react-icons/io5';
import { TbCurrencyNaira } from 'react-icons/tb';

function page() {
  return (
    <div className={`${parentStyles.page} ${styles.page}`}>
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
          title={{ icon: <TbCurrencyNaira /> }}
          action={{ title: 'Start selling' }}
          metric={{ title: 'Total Sales', value: `₦0` }}
        />
      </div>
      <Card className={styles.welcome} maxWidth={1500}>
        <div className={styles.header}>
          <LuBadgeCheck />
          <span>Welcome to W3Pets!</span>
        </div>
        <div className={styles.slogan}>
          Your seller profile is now active. Here's what you can do to get
          started:
        </div>
        <div className={styles.cards}>
          <AnalyticsCard
            color="primary"
            title={{
              icon: <RxPerson />,
              title: 'Complete Your Profile',
            }}
            description={{
              title: 'Add more details to increase trust with buyers',
            }}
          />
          <AnalyticsCard
            color="primary"
            link={`${Paths.Sellers}${SellerDashboardPaths.Products}${DashboardProductsPaths.New}`}
            title={{
              icon: <FiPlusSquare />,
              title: 'Add More Products',
            }}
            description={{ title: 'The more you list, the more you can sell' }}
          />
          <AnalyticsCard
            color="primary"
            title={{ icon: <IoAnalytics />, title: 'Promote Your Shop' }}
            description={{
              title:
                'Boost your visibility and reach more customers by paying for ads—invest ',
            }}
          />
        </div>
      </Card>
      <Card className={styles.last_listing} maxWidth={1500}>
        <div className={styles.header}>Your Last Listing</div>
        <div className={styles.content}>
          <SelllerProductCard data={productsSeed[0]} isSpan />
        </div>
      </Card>
    </div>
  );
}

export default page;
