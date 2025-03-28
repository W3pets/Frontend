'use client';

import { useParams } from 'next/navigation';
import ProductCard from '../../../components/shared/ProductCard/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import DogList from '@/components/DogList';

const productDetails = [
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Chicken',
    category: 'Parrots',
    breed: 'Free-range',
    age: '2 months',
    price: '97,000',
    location: 'Akobo, Ibadan',
    productId: '12345',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Grass-Fed Cow',
    category: 'Fowls & Birds',
    breed: 'Grass-fed',
    age: '3 years',
    price: '250,000',
    location: 'Oyo, Ibadan',
    productId: '12346',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Boer Goat',
    category: 'Cats',
    breed: 'Free-range',
    age: '1 year',
    price: '75,000',
    location: 'Iseyin, Ibadan',
    productId: '12347',
  },
  {
    imageUrl: '/dog-pic.png',
    title: 'Vibrant Dogs',
    category: 'Fishes',
    breed: 'Organic',
    age: '1 week',
    price: '5,500',
    location: 'Molete, Ibadan',
    productId: '12348',
  },
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Healthy Piglet',
    category: 'Dogs',
    breed: 'Well-fed',
    age: '6 months',
    price: '85,000',
    location: 'Eleyele, Ibadan',
    productId: '12349',
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
    category: 'Dogs',
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
    { name: 'Dogs', imageUrl: '/Chicken-pic.png', categoryId: 'dogs' },
    { name: 'Fowls & Birds', imageUrl: '/Chicken-pic.png', categoryId: 'fowls-birds' },
    { name: 'Cats', imageUrl: '/Chicken-pic.png', categoryId: 'cats' },
    { name: 'Fishes', imageUrl: '/Chicken-pic.png', categoryId: 'fishes' },
    { name: 'Parrots', imageUrl: '/Chicken-pic.png', categoryId: 'parrots' },
  ];

  // Find the current category name based on categoryId
  const currentCategory = categories.find(
    (category) => category.categoryId === categoryId
  )?.name;

  // Filter products based on the current category
  const filteredProducts = productDetails.filter(
    (product) => product.category.toLowerCase() === currentCategory?.toLowerCase()
  );

  // Filter out the current category for the "Other Categories" section
  const otherCategories = categories.filter(
    (category) => category.categoryId !== categoryId
  );

  return (
    <div className="flex flex-col w-full pt-20 bg-primary">
      <div>
        <Link href="/" className="flex items-center gap-2 px-8 pt-2 pb-0">
          <Image src="/back-arrow.png" alt="back" width={1000} height={1000} className="w-[0.6rem]" />
          <p className="text-[0.8rem] text-[#757575] font-medium">
            Back to market
          </p>
        </Link>
      </div>

      <div className="px-8 pb-8 pt-6">
        <div className="flex-1 pb-8">
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

        <div className="mb-5">
          <p className="text-2xl text-[#757575] mb-5">Other Categories</p>

          <div className="flex gap-20 items-center pb-8">
            {otherCategories.map((category) => (
              <Link href={`/category/${category.categoryId}`} key={category.categoryId}>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="rounded-full w-24 h-24 bg-secondary p-2">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <p className="text-tertiary text-lg">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <p className='text-2xl text-[#757575] mb-5'>Dogs</p>
            <DogList />
          </div>
        </div>
      </div>
    </div>
  );
}
