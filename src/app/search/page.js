'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Replace with your logic to fetch results based on the query
      setResults([
        { id: 1, name: `Result for "${query}" 1` },
        { id: 2, name: `Result for "${query}" 2` },
      ]);
    }
  }, [query]);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {results.length ? (
        <ul className="space-y-4">
          {results.map((result) => (
            <li key={result.id} className="border-b pb-2">
              {result.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
