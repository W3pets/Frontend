'use client';
import React from 'react';
import ChatWindow from '@/components/pages/sellers/chat/ChatWindow';
import MessageList from '@/components/pages/sellers/chat/MessageList';
import { WebSocketProvider } from '@/components/providers/WebSocketProvider';
import ErrorState from '@/components/pages/sellers/chat/ErrorState';
import styles from '../page.module.scss';   

interface Props {
  params: { chatId: string };
}

export default function ChatPage({ params }: Props) {
  const id = Number(params.chatId);
  if (Number.isNaN(id)) return <ErrorState />;

  return (
    <WebSocketProvider>
      <div className={styles.container}>
        <aside className={styles.listPanel}>
          <MessageList />
        </aside>
        <main className={styles.chatPanel}>
          <ChatWindow />
        </main>
      </div>
    </WebSocketProvider>
  );
}