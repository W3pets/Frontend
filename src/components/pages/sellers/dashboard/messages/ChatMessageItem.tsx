'use client';

import React from 'react';
import { ChatMessage } from '@/model/DTO/user/chat/chat';
import ProductCard from './ProductCard';
import FileMessageItem from './FileMessageItem';
import styles from '@/components/pages/sellers/dashboard/styles.module.scss';
import moment from 'moment';

type ChatMessageItemProps = {
  message: ChatMessage;
  isSellerMessage: boolean;
};

export default function ChatMessageItem({
  message,
  isSellerMessage,
}: ChatMessageItemProps) {
  const messageClass = isSellerMessage ? styles.seller_message : styles.buyer_message;

  const renderMessageContent = () => {
    switch (message.type) {
      case 'product_card':
        return message.product && <ProductCard product={message.product} />;
      case 'file':
        return message.file && <FileMessageItem fileName={message.file.name} fileSize={message.file.size} />;
      case 'image':
        return message.image && (
          <img
            src={message.image.url}
            alt={message.image.alt || 'Attached image'}
            className={styles.image_message}
          />
        );
      default:
        return <p>{message.content}</p>;
    }
  };

  return (
    <div className={`${styles.message_item} ${messageClass}`}>
      <div className={styles.message_content}>
        {renderMessageContent()}
        <span className={styles.message_timestamp}>
          {moment(message.timestamp).format('LT')}
        </span>
      </div>
    </div>
  );
}
