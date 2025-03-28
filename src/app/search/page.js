'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Sidebar from '../../components/Filter.jsx';
import ProductCard from '../../components/shared/ProductCard/ProductCard.js';

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

const SearchComponent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Filter products based on the search query
      const filteredResults = productDetails.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.breed.toLowerCase().includes(query.toLowerCase()) ||
        product.location.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <h1 className="text-xl text-[#757575] mb-5">
        {results.length} result{results.length !== 1 ? 's' : ''} close by
      </h1>
      {results.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product) => (
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
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};

const SearchPage = () => {
  return (
    <div className="pt-20 pb-20 flex flex-row w-full bg-primary">
      <div>
        <Sidebar />
      </div>

      <div className="min-h-screen p-4 w-full">
        <Suspense fallback={<div>Loading search results...</div>}>
          <SearchComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;
