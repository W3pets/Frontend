import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import styles from './styles.module.scss';
import uniqId from 'uniqid';

type Props = {
  items: string[];
};

function CheckedList({ items }: Props) {
  return (
    <div className={styles.list}>
      {items.map((term) => (
        <div key={uniqId()} className={styles.item}>
          <FaCheck />
          <span>{term}</span>
        </div>
      ))}
    </div>
  );
}
export default CheckedList;
