'use client';

import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/messages/messages.module.scss';
import ChatSidebar from '@/components/pages/sellers/dashboard/messages/ChatSidebar';
import ChatWindow from '@/components/pages/sellers/dashboard/messages/ChatWindow';
import { ChatProvider } from '@/components/pages/sellers/dashboard/messages/context';

export default function Page() {
  return (
    <ChatProvider>
      <div className={`${parentStyles.page} ${styles.page}`}>
        <div className={styles.chatLayout}>
          <ChatSidebar />
          <ChatWindow />
        </div>
      </div>
    </ChatProvider>
  );
}
