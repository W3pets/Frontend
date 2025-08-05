import React from 'react';
import type { Message } from '@/lib/store/slices/chatSlice'; // Ensure 'type' import
import styles from './CustomToast.module.scss'; // Corrected: Capital 'C' for CustomToast

interface Props {
  message: Message;
}

export default function CustomToast({ message }: Props) {
  return (
    <div className={styles.toast}>
      <img
        src={message.sender.profileImage || `https://placehold.co/40x40/aabbcc/ffffff?text=${message.sender.businessName.charAt(0).toUpperCase()}`}
        alt="avatar"
        className={styles.avatar}
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://placehold.co/40x40/aabbcc/ffffff?text=${message.sender.businessName.charAt(0).toUpperCase()}`;
        }}
      />
      <div className={styles.content}>
        <strong>New message from {message.sender.businessName}</strong>
        <p>{message.content.slice(0, 40)}...</p>
      </div>
    </div>
  );
}
