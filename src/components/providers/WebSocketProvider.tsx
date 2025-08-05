'use client';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { addMessage, setTypingStatus, setUserOnline, setUserOffline } from '@/lib/store/slices/chatSlice';
import { toast } from 'react-toastify';
import CustomToast from '@/components/shared/CustomToast';
import type { Message } from '@/lib/store/slices/chatSlice'; // Ensure 'type' import

const WebSocketContext = createContext<{ simulateTyping: (id: number) => void } | null>(null);

export const useWebSocket = () => {
  const ctx = useContext(WebSocketContext);
  if (!ctx) throw new Error('WebSocketProvider missing');
  return ctx;
};

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const currentChatId = useAppSelector((s) => s.chat.currentChatId);
  const msgTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Simulate online/offline events
    const onlineInterval = setInterval(() => {
      const uid = Math.floor(Math.random() * 5) + 1;
      dispatch(setUserOnline(uid));
      setTimeout(() => dispatch(setUserOffline(uid)), Math.random() * 10000 + 3000);
    }, 20000);
    return () => clearInterval(onlineInterval);
  }, [dispatch]);

  useEffect(() => {
    if (msgTimer.current) {
      clearInterval(msgTimer.current);
    }

    msgTimer.current = setInterval(() => {
      const fake: Message = { // Explicitly type 'fake' as Message
        id: Date.now(),
        conversationId: 2,
        content: 'Simulated live message 😊',
        messageType: 'text',
        isRead: false,
        createdAt: new Date().toISOString(),
        sender: { id: 4, email: 'jane@example.com', businessName: 'Jane Doe', profileImage: 'https://placehold.co/40x40/aabbcc/ffffff?text=JD' },
      };
      dispatch(addMessage(fake));
      if (currentChatId !== fake.conversationId) toast(<CustomToast message={fake} />);
    }, Math.random() * 15000 + 8000);

    return () => {
      if (msgTimer.current) {
        clearInterval(msgTimer.current);
      }
    };
  }, [dispatch, currentChatId]);

  const simulateTyping = (conversationId: number) => {
    dispatch(setTypingStatus({ conversationId, isTyping: true }));
    setTimeout(
      () => dispatch(setTypingStatus({ conversationId, isTyping: false })),
      Math.random() * 3000 + 2000
    );
  };

  return (
    <WebSocketContext.Provider value={{ simulateTyping }}>
      {children}
    </WebSocketContext.Provider>
  );
}
