import SelllerProductCard, {
  CardProps,
} from '@/components/shared/Cards/SellerProductCard/SelllerProductCard';
import React from 'react';
import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/product_styles.module.scss';
import Card from '@/components/shared/Cards/Card';

export const productsSeed = [
  {
    imageUrl: '/dummy/dummy_dog.jpeg',
    title: 'Golden Retriever Puppy',
    category: 'Dog',
    price: 60000,
    productId: 12351,
    isSold: false,
    isSoldOut: false,
    views: 100,
    breed: 'Well-fed',
    age: '5 months',
  },
  {
    imageUrl: '/dummy/dummy_cat.jpeg',
    title: 'Persian Cat',
    category: 'Cat',
    price: 110000,
    productId: 12352,
    isSold: true,
    isSoldOut: true,
    views: 200,
    breed: 'Well-fed',
    age: '5 months',
  },
  {
    imageUrl: '/dummy/dummy_bird.jpeg',
    title: 'Macaw Parrot',
    category: 'Poultry',
    price: 40000,
    productId: 12353,
    isSold: true,
    isSoldOut: false,
    views: 150,
    breed: 'Well-fed',
    age: '5 months',
  },
] as CardProps[];

function page() {
  return (
    <div className={parentStyles.page}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <h1>Your Products</h1>
          <button className={styles.items_count}>
            <span>{productsSeed.length}</span>
            <span>items</span>
          </button>
        </div>
        <div className={styles.products}>
          {productsSeed.map((product) => (
            <SelllerProductCard
              isMininal
              key={product.productId}
              data={product}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default page;
