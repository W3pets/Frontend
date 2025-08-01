// dashboard/messages/layout.tsx
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import { sidebarMeta } from '@/components/pages/sellers/dashboard/layoutdata'; // move sidebarMeta to a shared file
import styles from './messagesLayout.module.scss';

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  // Sellers chat messages layout: Sidebar is now on the left, no right sidebar
  return (
    <div className={styles.wrapper}>
      {/* Default sidebar at the leftmost position */}
      <Sidebar
        children={sidebarMeta.filter((item) => typeof item === 'object')}
        pathsIds={[]}
        minDestopWidth={800}
      />
      {/* Main chat content area */}
      <div className={styles.main}>{children}</div>
    </div>
  );
}
