'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/shared/ProductCard/ProductCard';
import { productsSeed } from '@/components/pages/home/FeaturedProducts/FeaturedProducts';
import { ProductMini } from '@/model/types/product';
import styles from '@/components/pages/search/styles.module.scss';
import Image from 'next/image';

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState<ProductMini[]>([]);

  useEffect(() => {
    if (query) {
      const filteredResults = productsSeed.filter((product: ProductMini) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.location.toLowerCase().includes(query.toLowerCase()) ||
        product.breed.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const showPlaceholder = !query && results.length === 0;

  return (
    <>
      <h1 className="text-xl text-[#757575] mb-5">
        {results.length} result{results.length !== 1 ? 's' : ''} for "{query || 'all pets'}"
      </h1>
      
      {showPlaceholder ? (
        <div className={styles.no_results}>
          <Image
            src="/assets/no-results.svg"
            alt="Start searching"
            width={400}
            height={400}
            className={styles.no_results_image}
          />
          <p className={styles.no_results_text}>Start searching to see available pets</p>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      ) : (
        <div className={styles.no_results}>
          <p className={styles.no_results_text}>No results found.</p>
        </div>
      )}
    </>
  );
};

export default Search;