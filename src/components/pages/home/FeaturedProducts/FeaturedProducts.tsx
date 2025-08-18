import { ProductMini, Vaccinated } from '@/model/types/product';
import styles from './styles.module.scss';
import ProductCard from '@/components/shared/ProductCard/ProductCard';
import uniqId from 'uniqid';
import Filter from '@/components/shared/Filter/Filter';

export const productsSeed: ProductMini[] = [
  {
    imageUrl: '/dummy/dummy_dog.jpeg',
    title: 'Golden Retriever Puppy',
    category: 0,
    breed: 'Free-range',
    age: '8 months',
    price: '60,000',
    location: 'Bodija, Ibadan',
    productId: 12351,
    rating: 3.0,
    vaccinated: Vaccinated.Not,
  },
  {
    imageUrl: '/dummy/dummy_cat.jpeg',
    title: 'Persian Cat',
    category: 1,
    breed: 'Organic',
    age: '1 year',
    price: '110,000',
    location: 'Ogbomosho, Oyo',
    productId: 12352,
    rating: 3.8,
    vaccinated: Vaccinated.Full,
  },
  {
    imageUrl: '/dummy/dummy_bird.jpeg',
    title: 'Macaw Parrot',
    category: 2,
    breed: 'Well-fed',
    age: '5 months',
    price: '40,000',
    location: 'Challenge, Ibadan',
    productId: 12353,
    rating: 4.5,
    vaccinated: Vaccinated.Partially,
  },
  {
    imageUrl: '/dummy/dummy_dog.jpeg',
    title: 'Golden Retriever Puppy',
    category: 0,
    breed: 'Free-range',
    age: '8 months',
    price: '60,000',
    location: 'Bodija, Ibadan',
    productId: 12351,
    rating: 3.0,
    vaccinated: Vaccinated.Not,
  },
  {
    imageUrl: '/dummy/dummy_cat.jpeg',
    title: 'Persian Cat',
    category: 1,
    breed: 'Organic',
    age: '1 year',
    price: '110,000',
    location: 'Ogbomosho, Oyo',
    productId: 12352,
    rating: 3.8,
    vaccinated: Vaccinated.Full,
  },
  {
    imageUrl: '/dummy/dummy_bird.jpeg',
    title: 'Macaw Parrot',
    category: 2,
    breed: 'Well-fed',
    age: '5 months',
    price: '40,000',
    location: 'Challenge, Ibadan',
    productId: 12353,
    rating: 4.5,
    vaccinated: Vaccinated.Partially,
  },
];

function FeaturedProducts() {
  return (
    <div className={styles.split}>
      <div className={styles.filters}>
        <Filter />
      </div>
      <div className={styles.products}>
        {productsSeed.map((product) => (
          <ProductCard key={uniqId()} {...product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
