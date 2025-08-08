import React from 'react';
import Image from 'next/image';
import { RiUserLine } from 'react-icons/ri';
import styles from './styles.module.scss';

type UserAvatarProps = {
  src?: string;
  username: string;
  isOnline?: boolean;
};

export default function UserAvatar({ src, username, isOnline }: UserAvatarProps) {
  return (
    <div className={styles.avatar_wrapper}>
      {src ? (
        <Image
          src={src}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          className={styles.avatar_image}
        />
      ) : (
        <div className={styles.avatar_placeholder}>
          <RiUserLine />
        </div>
      )}
      {isOnline && <span className={styles.online_indicator} aria-label="Online status" />}
    </div>
  );
}