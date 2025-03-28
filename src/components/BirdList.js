import React from 'react';
import ProductCard from './shared/ProductCard/ProductCard';

const productDetails = [
  {
    imageUrl: '/Chicken-pic.png',
    title: 'Farm Fresh Chicken',
    category: 'Fowls & Birds',
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
    category: 'Fowls & Birds',
    breed: 'Free-range',
    age: '1 year',
    price: '75,000',
    location: 'Iseyin, Ibadan',
    productId: '12347',
  },
  {
    imageUrl: '/dog-pic.png',
    title: 'Vibrant Dogs',
    category: 'Fowls & Birds',
    breed: 'Organic',
    age: '1 week',
    price: '5,500',
    location: 'Molete, Ibadan',
    productId: '12348',
  },
];

const BirdList = () => {
  return (
    <div className="mb-5">
      <p className="mb-5 text-xl font-medium text-black">Fowls & Birds</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productDetails.map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default BirdList;
