import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import styles from './styles.module.scss';
import { utils } from '@/lib/utils/base';
import Button from '../../Button/Button';

export type CardProps = {
  title: string;
  imageUrl: string;
  price: number;
  views: number;
  category: string;
  isSold: boolean;
  isSoldOut: boolean;
  productId: number;
};

function SelllerProductCard({ data }: { data: CardProps }) {
  return (
    <Card isOutlined className={styles.card_wrapper}>
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
        <div className={styles.cat_and_views}>
          <p className={styles.category}>{data.category}</p>
          <p className={styles.views}>{data.views} views</p>
        </div>
        <div className={styles.actions}>
          <Button isOutline>Edit</Button>
          <Button isOutline>Preview</Button>
        </div>
      </div>
    </Card>
  );
}

export default SelllerProductCard;
