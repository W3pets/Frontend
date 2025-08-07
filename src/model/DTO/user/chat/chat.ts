import { UserMini } from '../auth';

//single message
export type ChatMessage = {
  id: string;
  sender: UserMini;
  content: string;
  timestamp: string;
};

//single conversation btw seller & a user (buyer or seller).
export type Conversation = {
  id: string;
  participants: UserMini[];
  lastMessage: ChatMessage;
  isOnline?: boolean; //optional (prototyping for now based on greendot in figma design)
  unreadCount?: number; // optional (also prototyping for for the notification badge)
};