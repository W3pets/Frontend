import React from 'react';
import styles from './styles.module.scss';
import uniqid from 'uniqid';

type Props = {
  items: { name: string; id: number }[];
};

function MultiChecked({ items }: Props) {
  return (
    <div className={styles.items}>
      {items.map(({ id, name }) => (
        <div key={uniqid()} className={styles.item}>
          <input type="checkbox" />
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default MultiChecked;
