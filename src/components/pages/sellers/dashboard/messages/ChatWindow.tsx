'use client';

import React, { useState } from 'react';
import styles from '@/components/pages/sellers/dashboard/styles.module.scss';
import UserAvatar from '@/components/shared/Avatar/UserAvatar';
import ChatMessageItem from './ChatMessageItem';
import { Conversation, ChatMessage } from '@/model/DTO/user/chat/chat';
import { BiPhone, BiVideo, BiSolidPaperPlane } from 'react-icons/bi';

type ChatWindowProps = {
  conversation: Conversation | null;
  sellerId: number;
};

export default function ChatWindow({ conversation, sellerId }: ChatWindowProps) {
  const [message, setMessage] = useState('');

  if (!conversation) {
    return (
      <div className={styles.chat_window_empty}>
        <p>Select a conversation to start chatting</p>
      </div>
    );
  }

  const otherParticipant = conversation.participants.find((p) => !p.isSeller);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Logic to send the message will go here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className={styles.chat_window_container}>
      <div className={styles.chat_header}>
        <div className={styles.user_info}>
          <UserAvatar
            src={`https://placehold.co/40x40/ccc/fff?text=${otherParticipant?.username[0]}`}
            username={otherParticipant?.username || 'User'}
            isOnline={conversation.isOnline}
          />
          <div className={styles.details}>
            <h4>{otherParticipant?.username}</h4>
            <span className={styles.status}>
              {conversation.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
        <div className={styles.action_buttons}>
          <BiPhone />
          <BiVideo />
        </div>
      </div>
      <div className={styles.message_list}>
        {conversation.messages.map((msg, index) => (
          <ChatMessageItem
            key={index}
            message={msg}
            isSellerMessage={msg.sender.id === sellerId}
          />
        ))}
      </div>
      <div className={styles.chat_input}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>
          <BiSolidPaperPlane />
        </button>
      </div>
    </div>
  );
}
