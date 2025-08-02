'use client';

import styles from './messages.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import { useChatContext } from './context';
import MessageInput from './MessageInput';

function ChatWindow() {
  const { selectedConvo } = useChatContext();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (!selectedConvo) return;

    const fetchMessages = async () => {
      try {
        const res = await api.get(
          `/messages/conversations/${selectedConvo.id}/messages`
        );
        setMessages(res.data || []);

        await api.put(`/messages/conversations/${selectedConvo.id}/read`);
      } catch (err) {
        console.error('Failed to load messages', err);
      }
    };

    fetchMessages();
  }, [selectedConvo]);

  if (!selectedConvo) {
    return <div className={styles.chatWindow}>Select a conversation</div>;
  }

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <Image
          src={selectedConvo.otherUser.profileImage || '/avatars/default.png'}
          alt={selectedConvo.otherUser.businessName}
          width={40}
          height={40}
          className={styles.avatar}
        />
        <div className={styles.userDetails}>
          <div className={styles.name}>{selectedConvo.otherUser.businessName}</div>
          <div className={styles.status}>Online</div>
        </div>
      </div>

      <div className={styles.messages}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.messageRow} ${
              msg.sender.id === selectedConvo.otherUser.id
                ? ''
                : styles.outgoing
            }`}
          >
            <div
              className={
                msg.sender.id === selectedConvo.otherUser.id
                  ? styles.messageBubble
                  : styles.messageBubbleOutgoing
              }
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <MessageInput
        conversationId={selectedConvo.id}
        onSend={(newMsg) => setMessages((prev) => [...prev, newMsg])}
      />
    </div>
  );
}

export default ChatWindow;
