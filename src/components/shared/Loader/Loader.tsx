import React from 'react';
import styles from './styles.module.scss';
import { VscLoading } from 'react-icons/vsc';

type LoaderProps = {
  radius?: number;
  isFixed?: boolean;
};

function Loader({ radius = 25, isFixed = false }: LoaderProps) {
  return (
    <div className={`${styles.loader} ${isFixed ? styles.isFixed : ''}`}>
      <VscLoading style={{ fontSize: radius }} />
    </div>
  );
}

export default Loader;
