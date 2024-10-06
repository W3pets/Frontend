import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = ({ placeholder = "Search for dogs, cats, birds, and more..." }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex relative items-center border border-tertiary rounded-lg shadow-sm hover:shadow-md transition duration-200 focus:hidden">
        <input
          type="text"
          className="w-full pl-7 pr-12 py-2 text-gray-700 bg-white border-none rounded-lg focus:outline-none focus:ring-0 text-xs placeholder:text-[#757575]"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-1 absolute right-0"
        >
          <Image src='/search-icon.png' alt='search' width={1000} height={1000} className='w-5'/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
