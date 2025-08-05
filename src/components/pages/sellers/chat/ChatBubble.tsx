import React from 'react';
import type { Message } from '@/lib/store/slices/chatSlice';
import styles from './chatBubble.module.scss';
import { useAppSelector } from '@/lib/store/hooks';
import type { RootState } from '@/lib/store'; // Import RootState to type the selector
import type { AuthStore } from '@/model/types/user/auth'; // Import your actual AuthStore type
import type { UserMini } from '@/model/DTO/user/auth'; // Import UserMini type

interface Props {
  message: Message;
}

// Correctly define UserState to reflect the actual structure of s.user in RootState.
// Based on the error, s.user is an object that contains 'auth' (of type AuthStore)
// and 'cart' (which we'll assume is an array, but you might have a specific CartStore type).
interface UserState {
  auth: AuthStore; // This property holds your AuthStore state
  cart: any[]; // Assuming 'cart' is another part of your user slice state. Adjust type if known.
  // Add any other top-level properties that exist directly on s.user in your RootState
}

export default function ChatBubble({ message }: Props) {
  // Now, s.user will be correctly typed as UserState, allowing proper access.
  // We access the logged-in user's ID from the 'user' property within the 'auth' part of the state.
  const loggedInUserId = useAppSelector((s: RootState) => (s.user as UserState).auth.user?.id);

  // Safely compare: Ensure loggedInUserId is a number before comparison.
  // message.sender.id is expected to be a number based on chatSlice.ts.
  const isOwn = typeof loggedInUserId === 'number' && message.sender.id === loggedInUserId;

  return (
    <div className={`${styles.bubble} ${isOwn ? styles.outgoing : styles.incoming}`}>
      <p>{message.content}</p>
      <span className={styles.timestamp}>{new Date(message.createdAt).toLocaleTimeString()}</span>
    </div>
  );
}
