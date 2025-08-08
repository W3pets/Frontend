'use client';

import React from 'react';
import Image from 'next/image';
import styles from '../styles.module.scss';
import { Product } from '@/model/DTO/product/product';
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.product_card_container}>
      <div className={styles.product_image_wrapper}>
        <Image
          src={product.image || 'https://placehold.co/60x60/ccc/fff?text=No+Image'}
          alt={product.title}
          width={60}
          height={60}
          className={styles.product_image}
        />
      </div>
      <div className={styles.product_details}>
        <p className={styles.product_title}>{product.title}</p>
        <span className={styles.product_price}>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}