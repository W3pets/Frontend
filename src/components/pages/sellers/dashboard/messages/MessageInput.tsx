'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import styles from './messages.module.scss';
import api from '@/services/api';

function MessageInput({
  conversationId,
  onSend,
}: {
  conversationId: number;
  onSend: (message: any) => void;
}) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      const res = await api.post('/messages/send', {
        conversationId,
        content: text,
        messageType: 'text',
      });

      onSend(res.data);
      setText('');
    } catch (err) {
      console.error('Failed to send message', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.inputArea}>
      <input
        type="text"
        placeholder="Type your message..."
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        onKeyDown={(e) => {
          if (e.key === 'Enter') sendMessage();
        }}
      />
      <button
        className={styles.sendButton}
        onClick={sendMessage}
        disabled={loading}
      >
        <FiSend />
      </button>
    </div>
  );
}

export default MessageInput;
