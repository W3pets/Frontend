'use client';

import React, { createContext, useContext, useState } from 'react';

type OtherUser = {
  id: number;
  email: string;
  businessName: string;
  profileImage: string;
};

type LastMessage = {
  content: string;
  createdAt: string;
};

export type Conversation = {
  id: number;
  otherUser: OtherUser;
  subject: string;
  lastMessage?: LastMessage;
  updatedAt: string;
  unreadCount: number;
};

type ChatContextType = {
  selectedConvo: Conversation | null;
  setSelectedConvo: (c: Conversation | null) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedConvo, setSelectedConvo] = useState<Conversation | null>(null);

  return (
    <ChatContext.Provider value={{ selectedConvo, setSelectedConvo }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used within ChatProvider');
  return ctx;
};
