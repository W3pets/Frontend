'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import ConversationsPanel from '@/components/pages/sellers/dashboard/messages/ConversationsPanel';
import ChatWindow from '@/components/pages/sellers/dashboard/messages/ChatWindow';
import { Conversation, ChatMessage, User } from '@/model/DTO/user/chat/chat';
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineRectangleGroup,
  HiOutlineBell,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2';
import { BiLogOut } from 'react-icons/bi';
import { IoIosAddCircle } from 'react-icons/io';
import UserAvatar from '@/components/shared/Avatar/UserAvatar';
import ChatMessageItem from '@/components/pages/sellers/dashboard/messages/ChatMessageItem';

// Mock Data
const sellerUser: User = {
  id: 1,
  email: 'seller@example.com',
  username: 'Abraham',
  role: 'seller',
  isSeller: true,
  isVerified: true,
  UserAvatar: {
    url: 'https://placehold.co/40x40/ccc/fff?text=AB',
    alt: 'Seller Avatar',
  },
};

const buyer1: User = {
  id: 2,
  email: 'buyer1@example.com',
  username: 'Jane Doe',
  role: 'user',
  isSeller: false,
  isVerified: true,
  UserAvatar: {
    url: 'https://placehold.co/40x40/ccc/fff?text=JD',
    alt: 'Buyer Avatar',
  },
};

const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    participants: [sellerUser, buyer1],
    lastMessage: {
      id: 'msg1',
      sender: buyer1,
      content: 'Hello, is this product still available?',
      timestamp: '2025-08-08T10:30:00Z',
    },
    isOnline: true,
    unreadCount: 2,
    messages: [
      {
        id: 'msg1',
        sender: buyer1,
        content: 'Hello, is this product still available?',
        timestamp: '2025-08-08T10:30:00Z',
        type: 'text'
      },
      {
        id: 'msg2',
        sender: sellerUser,
        content: 'Yes, it is!',
        timestamp: '2025-08-08T10:35:00Z',
        type: 'text'
      },
      {
        id: 'msg3',
        sender: buyer1,
        content: 'Could you tell me more about the specifications?',
        timestamp: '2025-08-08T10:40:00Z',
        type: 'text'
      },
      {
        id: 'msg4',
        sender: sellerUser,
        content: '',
        type: 'product_card',
        product: {
          id: 'prod_123',
          title: 'Premium Dog Food',
          price: 25.99,
          image: 'https://placehold.co/60x60/3282B8/fff?text=Dog+Food',
        },
        timestamp: '2025-08-08T10:45:00Z',
      },
      {
        id: 'msg5',
        sender: buyer1,
        content: '',
        type: 'file',
        file: {
          name: 'dog-food-brochure.pdf',
          size: 1548576,
          url: 'https://example.com/files/dog-food-brochure.pdf',
        },
        timestamp: '2025-08-08T10:50:00Z',
      },
      {
        id: 'msg6',
        sender: buyer1,
        content: '',
        type: 'image',
        image: {
          url: 'https://placehold.co/200x150/F8D800/000?text=Dog+Toy',
          alt: 'A picture of a dog toy',
        },
        timestamp: '2025-08-08T10:55:00Z',
      },
    ],
  },
  {
    id: 'conv2',
    participants: [
      { id: 1, email: 'seller@example.com', username: 'Abraham', role: 'seller', isSeller: true, isVerified: true, UserAvatar: { url: 'https://placehold.co/40x40/ccc/fff?text=AB', alt: 'Seller Avatar' }  },
      { id: 3, email: 'buyer2@example.com', username: 'John Smith', role: 'user', isSeller: false, isVerified: true, UserAvatar: { url: 'https://placehold.co/40x40/ccc/fff?text=JS', alt: 'Buyer Avatar' }  },
    ],
    lastMessage: {
      id: 'msg2',
      sender: { id: 1, email: 'seller@example.com', username: 'Abraham', role: 'seller', isSeller: true, isVerified: true, UserAvatar: { url: 'https://placehold.co/40x40/ccc/fff?text=AB', alt: 'Seller Avatar' }  },
      content: 'Yes, it is!',
      timestamp: '2025-08-07T14:00:00Z',
    },
    isOnline: false,
    messages: [
      // ... more messages here
    ],
  },
  // ... (other mock conversations)
];


const sellerNavLinks: { id: string; text: string; link: string; icon: any }[] = [
  { id: '1', text: 'Messages', link: '/sellers/dashboard/messages', icon: HiOutlineChatBubbleOvalLeftEllipsis },
  { id: '2', text: 'Products', link: '/sellers/dashboard/products', icon: HiOutlineRectangleGroup },
  { id: '3', text: 'Notifications', link: '/sellers/dashboard/notifications', icon: HiOutlineBell },
  { id: '4', text: 'Analytics', link: '/sellers/dashboard/analytics', icon: HiOutlineChartBar },
];

const sellerHeader = {
  text: 'Dashboard',
  action: {
    icon: IoIosAddCircle,
    label: 'New Product',
    link: '/sellers/dashboard/products/create',
  },
};

const navPaths = sellerNavLinks.map(link => link.link);

export default function MessagesPage() {
  const [activeConversationId, setActiveConversationId] = useState<string | null>('conv1');
  
  const activeConversation = mockConversations.find(
    (conv) => conv.id === activeConversationId
  ) || null;

  function setSearchTerm(term: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.seller_layout}>
      <Sidebar children={sellerNavLinks} header={sellerHeader} pathsIds={navPaths} />
      <div className={styles.main_content}>
        <div className={styles.dashboard_header}>
          <h2>Main Menu</h2>
        </div>
        <div className={styles.chat_dashboard_grid}>
          <ConversationsPanel
            conversations={mockConversations}
            activeConversationId={activeConversationId}
            setActiveConversationId={setActiveConversationId}
            searchTerm='search term'
            setSearchTerm={setSearchTerm}
          />
          <ChatWindow conversation={activeConversation} sellerId={sellerUser.id} />
        </div>
      </div>
    </div>
  );
}
