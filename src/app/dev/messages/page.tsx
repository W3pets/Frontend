import React from 'react';
import EmptyState from '@/components/pages/sellers/chat/EmptyState';
import MessageList from '@/components/pages/sellers/chat/MessageList';
import { WebSocketProvider } from '@/components/providers/WebSocketProvider';
import styles from './page.module.scss';

export default function MessagesPage() {
  return (
    <WebSocketProvider>
      <div className={styles.container}>
        <aside className={styles.listPanel}>
          <MessageList />
        </aside>
        <main className={styles.chatPanel}>
          <EmptyState />
        </main>
      </div>
    </WebSocketProvider>
  );
}