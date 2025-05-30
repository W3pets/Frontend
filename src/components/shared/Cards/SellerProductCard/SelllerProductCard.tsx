import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import styles from './styles.module.scss';
import { utils } from '@/lib/utils/base';
import Button from '../../Button/Button';
import {
  DashboardProductsPaths,
  SellerDashboardPaths,
} from '@/model/types/seller';
import { Paths } from '@/model/types/global';

export type CardProps = {
  title: string;
  imageUrl: string;
  price: number;
  views: number;
  gender: string;
  category: string;
  breed: string;
  age: string;
  isSold: boolean;
  isSoldOut: boolean;
  productId: number;
};

function SelllerProductCard({
  data,
  isSpan = false,
  isMininal = false,
}: {
  data: CardProps;
  isSpan?: boolean;
  isMininal?: boolean;
}) {
  return (
    <Card
      isOutlined
      className={`${styles.card_wrapper} ${isSpan ? styles.is_span : ''}`}
    >
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={1000}
        height={1000}
        className={styles.video}
      />

      <div
        className={`${styles.status} ${data.isSoldOut ? styles.sold_out : data.isSold ? styles.sold : styles.active}`}
      >
        {data.isSoldOut ? 'Sold Out' : data.isSold ? 'Sold' : 'Active'}
      </div>

      <div className={styles.card_content}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.price}>{utils.getReaablePrice(data.price)}</p>
        <div className={styles.span_info}>
          <div className={styles.sec}>
            <div className={styles.sec_title}>Category</div>
            <div className={styles.sec_text}>{data.category}</div>
          </div>

          <div className={styles.sec}>
            <div className={styles.sec_title}>Views</div>
            <div className={styles.sec_text}>{data.views}</div>
          </div>
        </div>
        {!isMininal && (
          <div className={styles.span_info}>
            <div className={styles.sec}>
              <div className={styles.sec_title}>Age</div>
              <div className={styles.sec_text}>{data.age}</div>
            </div>
            <div className={styles.sec}>
              <div className={styles.sec_title}>Breed</div>
              <div className={styles.sec_text}>{data.breed}</div>
            </div>
          </div>
        )}
        <div className={styles.actions}>
          <Button
            link={`${Paths.Sellers}${SellerDashboardPaths.Products}/${data.productId}`}
            isOutline
          >
            Edit
          </Button>
          <Button
            link={`${Paths.Sellers}${SellerDashboardPaths.Products}${DashboardProductsPaths.Preview}/${data.productId}`}
            isOutline
          >
            Preview
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default SelllerProductCard;
