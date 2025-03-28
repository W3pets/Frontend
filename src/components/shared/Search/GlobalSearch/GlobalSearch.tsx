import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  useV2?: boolean;
};

const GlobalSearch = ({
  placeholder = 'Search for dogs, cats, birds, and more...',
  useV2 = false,
}: Props) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={`${styles.search} ${useV2 ? styles.v2 : ''}`}>
      <input
        type="text"
        className={styles.search_input}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div
        className={`${styles.search_btn} ${useV2 ? styles.v2 : ''}`}
        onClick={handleSubmit}
      >
        <IoSearch />
      </div>
    </div>
  );
};

export default GlobalSearch;
