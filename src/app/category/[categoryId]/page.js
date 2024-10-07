'use client';

import { useParams } from 'next/navigation';
import ProductCard from '../../components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';

const productDetails = [
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Merino Sheep',
    category: 'Fowls & Birds',
    breed: 'Wool producing',
    age: '1.5 years',
    price: '120,000',
    location: 'Moniya, Ibadan',
    productId: '12350',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Muscovy Duck',
    category: 'Parrots',
    breed: 'Free-range',
    age: '8 months',
    price: '60,000',
    location: 'Bodija, Ibadan',
    productId: '12351',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Turkey',
    category: 'Cats',
    breed: 'Organic',
    age: '1 year',
    price: '110,000',
    location: 'Ogbomosho, Oyo',
    productId: '12352',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'New Zealand Rabbit',
    category: 'Fishes',
    breed: 'Well-fed',
    age: '5 months',
    price: '40,000',
    location: 'Challenge, Ibadan',
    productId: '12353',
  },
];

export default function CategoryPage() {
  const { categoryId } = useParams();

  const categories = [
    { name: 'Dogs', categoryId: 'dogs' },
    { name: 'Fowls & Birds', categoryId: 'fowls-birds' },
    { name: 'Cats', categoryId: 'cats' },
    { name: 'Fishes', categoryId: 'fishes' },
    { name: 'Parrots', categoryId: 'parrots' },
  ];

  // Find the current category name based on categoryId
  const currentCategory = categories.find(
    (category) => category.categoryId === categoryId
  )?.name;

  // Filter products based on the current category
  const filteredProducts = productDetails.filter(
    (product) => product.category.toLowerCase() === currentCategory?.toLowerCase()
  );

  return (
    <div className="flex flex-col w-full pt-20">
      <div>
        <Link href='/' className='flex items-center gap-2 px-8 pt-2 pb-0'>
        <Image src='/back-arrow.png' alt='back' width={1000} height={1000} className='w-[0.6rem]' />
        <p className='text-[0.8rem] text-[#757575] font-medium'>
        Back to market
        </p>
        </Link>
      </div>
      <div className="flex-1 px-8 pb-8 pt-6">
        <h2 className="text-2xl text-[#757575] mb-5">
          {currentCategory ? currentCategory : 'Category Not Found'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.productId}
                imageUrl={product.imageUrl}
                title={product.title}
                category={product.category}
                breed={product.breed}
                age={product.age}
                price={product.price}
                location={product.location}
                productId={product.productId}
              />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
