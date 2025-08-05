'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/lib/store/hooks';
import { sendMessage, addMessage } from '@/lib/store/slices/chatSlice';
import styles from './chatInput.module.scss';
import { HiPaperAirplane } from 'react-icons/hi';

interface Props { conversationId: number; }

export default function ChatInput({ conversationId }: Props) {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    const optimistic = {
      id: Date.now(), conversationId,
      content: text, messageType: 'text', isRead: true, createdAt: new Date().toISOString(),
      sender: { id: 1, email: '', businessName: '', profileImage: '' }
    };
    dispatch(addMessage(optimistic));
    dispatch(sendMessage({ conversationId, content: text, messageType: 'text' }));
    setText('');
  };
    
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className={styles.sendBtn} aria-label="Send">
        <HiPaperAirplane />
      </button>
    </div>
  );
}