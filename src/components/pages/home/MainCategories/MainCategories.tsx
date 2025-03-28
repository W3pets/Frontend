import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { PiDog } from 'react-icons/pi';
import { PiCat } from 'react-icons/pi';
import { LuBird } from 'react-icons/lu';
import { IoFishOutline } from 'react-icons/io5';
import { MdOutlinePets } from 'react-icons/md';
import { Paths } from '@/model/types/global';

const MainCategories = () => {
  const categories = [
    { name: 'Dogs', ImageUrl: PiDog, categoryId: 'dogs' },
    { name: 'Cats', ImageUrl: PiCat, categoryId: 'cats' },
    { name: 'Birds', ImageUrl: LuBird, categoryId: 'fowls-birds' },
    { name: 'Fish', ImageUrl: IoFishOutline, categoryId: 'fishes' },
    { name: 'Other Pets', ImageUrl: MdOutlinePets, categoryId: 'parrots' },
  ];

  return (
    <div className={styles.cats}>
      {categories.map(({ name, categoryId, ImageUrl }) => (
        <Link
          href={`${Paths.Category}/${categoryId}`}
          key={categoryId}
          className={styles.card}
        >
          <div className={styles.image}>
            <div className={styles.cover} />
            <ImageUrl />
          </div>
          <p className={styles.name}>{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default MainCategories;
