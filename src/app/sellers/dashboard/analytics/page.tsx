'use client';

import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/analysis.module.scss';

import { Card, Table, Typography } from 'antd';
import { Line } from '@ant-design/charts';
import { DataType, revenueConfig, table_data, viewsConfig } from './seed';
import AnalyticsCard from '@/components/shared/Cards/AnaltyicsCard/AnalyticsCard';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { ColumnsType } from 'antd/es/table';
import { GiNetworkBars } from 'react-icons/gi';
import { utils } from '@/lib/utils/base';
import PlanCard from '@/components/shared/Cards/PlanCard/PlanCard';
import { LuUsers } from 'react-icons/lu';
import { PiSpeedometerBold } from 'react-icons/pi';
import { CiGlobe } from 'react-icons/ci';
// Data for Revenue Overview

const { Text } = Typography;

function page() {
  const table_cols: ColumnsType<DataType> = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
      render: (text: string) => <Text>{text}</Text>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => (
        <Text style={{ fontWeight: 'bold' }}>
          {utils.getReaablePrice(price)}{' '}
        </Text>
      ),
      sorter: (a, b) => a.price - b.price, // Example: Enable sorting by price
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
    },
  ];

  return (
    <div className={`${parentStyles.page} ${styles.page}`}>
      <div className={styles.summary}>
        <AnalyticsCard
          color="primary"
          title={{ icon: <GiNetworkBars /> }}
          action={{ title: '+12.3%' }}
          metric={{
            title: 'Today"s Revenue',
            value: utils.getReaablePrice(450000),
          }}
        />
        <AnalyticsCard
          color="primary"
          title={{ icon: <GiNetworkBars /> }}
          action={{ title: '+8.93%' }}
          metric={{
            title: 'Total Sales',
            value: '12',
          }}
        />
        <AnalyticsCard
          color="error"
          title={{ icon: <GiNetworkBars /> }}
          action={{ title: '-8.93%' }}
          metric={{
            title: 'Total Views',
            value: '12,332',
          }}
        />
        <AnalyticsCard
          color="error"
          title={{ icon: <GiNetworkBars /> }}
          action={{ title: '-0.25%' }}
          metric={{
            title: 'Conversion Rate',
            value: '2.8%',
          }}
        />
      </div>

      <div className={styles.chart}>
        <Card title="Revenue Overview" style={{ flex: 1, minWidth: '200px' }}>
          <Line {...revenueConfig} height={250} />
        </Card>
        <Card title="Views Analytics" style={{ flex: 1, minWidth: '200px' }}>
          <Line {...viewsConfig} height={250} />
        </Card>
      </div>

      <Card title="Recent Sales" variant="borderless">
        <div
          className={styles.table}
          style={{ overflowX: 'auto', width: '100%' }}
        >
          <Table
            columns={table_cols}
            dataSource={table_data}
            pagination={false} // Disable pagination if you want to show all items
            showHeader={true} //
            style={{ minWidth: 700 }}
            //  Explicitly show header
          />
        </div>
      </Card>

      <section>
        <div className={styles.header}>
          <div className={styles.icon}>
            <IoAnalyticsOutline fontSize={30} />
          </div>
          <div className={styles.title}>Promote Your Products</div>
        </div>
        <div className={styles.slogan}>
          Boost your visibility and reach more potential buyers by advertising
          your products. Choose the plan that works best for your business.
        </div>
        <div className={styles.plans}>
          <PlanCard
            title="Daily Promotion"
            price="₦1,375"
            pricePeriod="per day"
            features={[
              'Featured for a single product',
              '24-hour visibility boost',
              'Basic analytics',
            ]}
            buttonText="Select Daily Plan"
          />

          <PlanCard
            title="Weekly Promotion"
            price="₦4,460"
            pricePeriod="per week"
            features={[
              'Featured for a single product',
              '7-day visibility boost',
              'Detailed performance analytics',
            ]}
            buttonText="Select Weekly Plan"
          />

          <PlanCard
            title="Seller Page Promotion"
            price="₦7,820"
            pricePeriod="per week"
            features={[
              'Promote your entire shop',
              'Top position in search results',
              'Featured in newsletters',
              'Advanced analytics dashboard',
            ]}
            buttonText="Select Premium Plan"
            isRecommended={true}
          />

          <PlanCard
            title="Logistics Services"
            price="₦2,320"
            pricePeriod="per service"
            features={[
              'Priority shipping',
              'Delivery tracking',
              'Customer notifications',
              'Shipping insurance',
            ]}
            buttonText="Select Logistics Plan"
          />
        </div>
      </section>

      <section>
        <div className={styles.header}>
          <div className={styles.title}>How Advertising Works</div>
        </div>
        <div className={styles.ad_cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <LuUsers fontSize={25} />
            </div>
            <div className={styles.title}>Reach More Customers</div>
            <div className={styles.slogan}>
              Your products will be shown to more potential buyers who are
              looking for what you're selling.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <CiGlobe fontSize={25} />
            </div>
            <div className={styles.title}>Enhance Visibility</div>
            <div className={styles.slogan}>
              Get premium placement in search results and on the homepage to
              stand out from competitors.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <PiSpeedometerBold fontSize={25} />
            </div>
            <div className={styles.title}>Boost Sales</div>
            <div className={styles.slogan}>
              Sellers who advertise typically see a 3-5x increase in views and
              higher conversion rates.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
