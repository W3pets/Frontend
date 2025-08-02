'use client';

import styles from './messages.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import api from '@/services/api';
import { useChatContext } from './context';

function ChatSidebar() {
  const [conversations, setConversations] = useState<any[]>([]);
  const { setSelectedConvo } = useChatContext();

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await api.get('/messages/conversations');
        setConversations(res.data || []);
      } catch (err) {
        console.error('Failed to fetch conversations', err);
      }
    };

    fetchConversations();
  }, []);

  return (
    <div className={styles.sidebar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search messages..."
      />
      <div className={styles.conversationList}>
        {conversations.map((c) => (
          <div
            key={c.id}
            className={styles.conversation}
            onClick={() => setSelectedConvo(c)}
          >
            <Image
              src={c.otherUser.profileImage || '/avatars/default.png'}
              alt={c.otherUser.businessName}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.details}>
              <div className={styles.name}>{c.otherUser.businessName}</div>
              <div className={styles.message}>{c.lastMessage?.content || ''}</div>
            </div>
            <div className={styles.meta}>
              <div className={styles.time}>
                {new Date(c.updatedAt).toLocaleTimeString()}
              </div>
              {!!c.unreadCount && <div className={styles.unreadDot} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
