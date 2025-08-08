import UserAvatar from '@/components/shared/Avatar/UserAvatar';
import { Product } from '@/model/DTO/product/product';

export type User = {
  id: number;
  email: string;
  username: string;
  role: 'user' | 'seller';
  isSeller: boolean;
  isVerified: boolean;
  UserAvatar: Image
};

export type File = {
  name: string;
  size: number;
  url: string;
};

export type Image = {
  url: string;
  alt?: string;
};

export type ChatMessage = {
  id: string;
  sender: User;
  content?: string;
  timestamp: string;
  // optional properties for different msg types
  type?: 'text' | 'product_card' | 'file' | 'image';
  product?: Product;
  file?: File;
  image?: Image;
};

export type Conversation = {
  id: string;
  participants: User[];
  lastMessage: ChatMessage;
  isOnline: boolean;
  unreadCount?: number;
  //new property to hold all msg in convo
  messages: ChatMessage[];
};
