import parentStyles from '@/components/pages/sellers/dashboard/styles.module.scss';
import styles from '@/components/pages/sellers/dashboard/messages/messages.module.scss';
import ChatSidebar from '@/components/pages/sellers/dashboard/messages/ChatSidebar';
import ChatWindow from '@/components/pages/sellers/dashboard/messages/ChatWindow';

function page() {
  return (
    <div className={`${parentStyles.page} ${styles.page}`}>
      <div className={styles.chatLayout}>
        <ChatSidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default page;
