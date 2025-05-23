import React from 'react';
import styles from './styles.module.scss';

type CardProps = {
  className?: string;
  children: React.ReactNode;
  maxWidth?: number;
  isOutlined?: boolean;
};

function Card({
  children,
  isOutlined = false,
  className = '',
  maxWidth = Infinity,
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${className} ${isOutlined ? styles.outlined : ''}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}

export default Card;
