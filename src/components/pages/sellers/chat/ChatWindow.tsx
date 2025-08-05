'use client';
import React, { useEffect } from 'react';
// Ensure ChatBubble is imported as a default export
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import EmptyState from './EmptyState';
import ErrorState from './ErrorState';
import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import styles from './ChatWindow.module.scss';
import type { Message, Conversation } from '@/lib/store/slices/chatSlice';
import { fetchMessages } from '@/lib/store/slices/chatSlice';

// Define props for EmptyState, ErrorState, and ChatInput
// It's best practice to define these interfaces in their respective component files.
interface EmptyStateProps { message: string; }
interface ErrorStateProps { message: string; }
interface ChatInputProps { conversationId: number; }

// Cast EmptyState, ErrorState, ChatInput to include their props for now
const TypedEmptyState = EmptyState as React.FC<EmptyStateProps>;
const TypedErrorState = ErrorState as React.FC<ErrorStateProps>;
const TypedChatInput = ChatInput as React.FC<ChatInputProps>;


export default function ChatWindow() {
  const dispatch = useAppDispatch();
  const { selectedChat, status, error, messages, currentChatId } = useAppSelector((state) => state.chat);

  useEffect(() => {
    if (currentChatId) {
      dispatch(fetchMessages(currentChatId));
    }
  }, [dispatch, currentChatId]);

  if (status === 'loading') return <TypedEmptyState message="Loading chat..." />;
  if (status === 'failed') return <TypedErrorState message={error || 'Failed to load chat'} />;
  if (!selectedChat) return <TypedEmptyState message="Select a chat to start messaging." />;

  const currentChatMessages = messages[selectedChat.id] || [];

  return (
    <div className={styles.chatWindow}>
      <div className={styles.bubbleList}>
        {currentChatMessages.map((msg: Message) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </div>
      <TypedChatInput conversationId={selectedChat.id} />
    </div>
  );
}
