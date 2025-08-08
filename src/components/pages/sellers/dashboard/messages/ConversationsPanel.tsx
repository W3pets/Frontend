// src/app/sellers/dashboard/messages/ConversationsPanel.tsx
'use client';

import React, { useMemo } from 'react';
import styles from '@/components/pages/sellers/dashboard/styles.module.scss';
import ConversationListItem from './ConversationListItem';
import { Conversation } from '@/model/DTO/user/chat/chat';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface ConversationsPanelProps {
  conversations: Conversation[];
  activeConversationId: string | null;
  setActiveConversationId: (id: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ConversationsPanel({
  conversations,
  activeConversationId,
  setActiveConversationId,
  searchTerm,
  setSearchTerm,
}: ConversationsPanelProps) {
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredConversations = useMemo(() => {
    if (!searchTerm) {
      return conversations;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return conversations.filter(conversation => {
      const otherUser = conversation.participants.find(p => !p.isSeller);
      const isNameMatch = otherUser?.username.toLowerCase().includes(lowerCaseSearchTerm);
      const isMessageMatch = conversation.messages.some(message => 
        message.content?.toLowerCase().includes(lowerCaseSearchTerm)
      );
      
      return isNameMatch || isMessageMatch;
    });
  }, [conversations, searchTerm]);

  return (
    <div className={styles.conversations_panel}>
      <div className={styles.search_bar}>
        <HiOutlineMagnifyingGlass className={styles.search_icon} />
        <input
          type="text"
          placeholder="Search for conversations..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.search_input}
        />
      </div>
      <div className={styles.conversations_list}>
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conv) => (
            <ConversationListItem
              key={conv.id}
              conversation={conv}
              isActive={conv.id === activeConversationId}
              onClick={() => setActiveConversationId(conv.id)}
            />
          ))
        ) : (
          <div className={styles.no_results}>No conversations found.</div>
        )}
      </div>
    </div>
  );
}
