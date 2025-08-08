'use client';

import React from 'react';
import UserAvatar from '@/components/shared/Avatar/UserAvatar';
import styles from '@/components/pages/sellers/dashboard/styles.module.scss';
import { Conversation } from '@/model/DTO/user/chat/chat';

type ConversationListItemProps = {
  conversation: Conversation;
  isActive: boolean;
  onClick: (conversationId: string) => void;
};

export default function ConversationListItem({
  conversation,
  isActive,
  onClick,
}: ConversationListItemProps) {
  const otherParticipant = conversation.participants.find(
    (p) => p.isSeller !== true
  );

  if (!otherParticipant) {
    return null; // Don't render if there's no other participant
  }

  const hasUnread = conversation.unreadCount && conversation.unreadCount > 0;

  const handleClick = () => {
    onClick(conversation.id);
  };

  return (
    <div
      className={`${styles.conversation_list_item} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <div className={styles.avatar_wrapper}>
        <UserAvatar
          src={`https://placehold.co/40x40/ccc/fff?text=${otherParticipant.username[0]}`}
          username={otherParticipant.username}
          isOnline={conversation.isOnline}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <p className={`${styles.name} ${hasUnread ? styles.unread : ''}`}>
            {otherParticipant.username}
          </p>
          <span className={styles.timestamp}>
            {conversation.lastMessage.timestamp}
          </span>
        </div>
        <p className={`${styles.last_message} ${hasUnread ? styles.unread : ''}`}>
          {conversation.lastMessage.content}
        </p>
      </div>
      {hasUnread && (
        <div className={styles.unread_badge}>
          <span>{conversation.unreadCount}</span>
        </div>
      )}
    </div>
  );
}