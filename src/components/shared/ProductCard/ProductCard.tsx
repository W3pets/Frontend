import Image from 'next/image';
import styles from './styles.module.scss';
import { MdOutlineShield } from 'react-icons/md';
import { IoPauseOutline } from 'react-icons/io5';
import { IoPlayOutline } from 'react-icons/io5';
import { TfiLocationPin } from 'react-icons/tfi';
import { IoMdTime } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { ProductMini, Vaccinated } from '@/model/types/product';
import { MdStarBorder } from 'react-icons/md';
import Link from 'next/link';
import { Paths } from '@/model/types/global';
import { useState } from 'react';

// ₦
export default function ProductCard({
  imageUrl,
  title,
  category,
  breed,
  age,
  vaccinated,
  price,
  rating,
  location,
  productId,
}: ProductMini) {
  const [isPlaying, setIsPlaying] = useState(false);
  const vaccinationColors = ['#16A34A', '#CA8A04', 'red'];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.card}>
      {/* Product Image */}
      <div className={styles.cover_video}>
        <div className={styles.over_head_info}>
          <div className={styles.length}>
            <IoMdTime /> <span>10s</span>
          </div>

          <div className={styles.favorite}>
            <MdFavoriteBorder />
          </div>
        </div>
        <div className={styles.play}>
          {!isPlaying && <IoPlayOutline onClick={togglePlay} />}
          {isPlaying && <IoPauseOutline onClick={togglePlay} />}
        </div>
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className={styles.video}
        />
      </div>

      {/* Product Info */}
      <Link
        href={`${Paths.Product}/${productId}`}
        className={styles.product_info}
      >
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <div className={styles.price}>{`₦${price}`}</div>
        </div>

        <div className={styles.age}>{age}</div>

        <div className={styles.other}>
          <div className={styles.rating}>
            <MdStarBorder />
            <span>{rating}</span>
          </div>
          <div className={styles.dot}>.</div>
          <div className={styles.location}>
            <TfiLocationPin />
            <span>{location}</span>
          </div>
        </div>

        <div
          className={styles.vaccinated}
          style={{ color: vaccinationColors[vaccinated] }}
        >
          <MdOutlineShield />
          <span>{`${Object.keys(Vaccinated)[vaccinated + 3]} Vaccinated`}</span>
        </div>
      </Link>
    </div>
  );
}
