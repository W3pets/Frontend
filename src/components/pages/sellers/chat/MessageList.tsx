'use client'; // This directive marks the component as a client component

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { fetchConversations, setCurrentChat } from '@/lib/store/slices/chatSlice';
import styles from './messageList.module.scss';
import type { Conversation } from '@/lib/store/slices/chatSlice';

export default function MessageList() {
  const dispatch = useAppDispatch();
  const { conversations, typing, online } = useAppSelector((s) => s.chat);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  const filtered = conversations.filter((c: Conversation) =>
    c.otherUser.businessName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder="Search messages..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className={styles.list}>
        {filtered.map((c: Conversation) => (
          <li
            key={c.id}
            className={styles.item}
            onClick={() => dispatch(setCurrentChat(c.id))}
          >
            <div className={styles.avatarWrapper}>
              <img
                src={c.otherUser.profileImage || `https://placehold.co/40x40/aabbcc/ffffff?text=${c.otherUser.businessName.charAt(0).toUpperCase()}`}
                alt="avatar"
                className={styles.avatar}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/40x40/aabbcc/ffffff?text=${c.otherUser.businessName.charAt(0).toUpperCase()}`;
                }}
              />
              {online[c.otherUser.id] && <span className={styles.onlineDot} />}
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{c.otherUser.businessName}</div>
              <div className={styles.snippet}>
                {typing[c.id]
                  ? <em className={styles.typing}>typing...</em>
                  : c.lastMessage.content}
              </div>
            </div>
            {c.unreadCount > 0 && <span className={styles.unread}>{c.unreadCount}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
