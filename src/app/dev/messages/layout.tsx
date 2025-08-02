// dashboard/messages/layout.tsx
import * as React from 'react';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import { sidebarMeta } from '@/components/pages/sellers/dashboard/layoutdata'; // move sidebarMeta to a shared file
import styles from './messagesLayout.module.scss';

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>{children}</div>
    <div className={styles.sidebarRight}>
      <Sidebar
        children={sidebarMeta
        .filter(
  (item): item is { icon: string | React.ReactElement; text: string; href: string; [key: string]: any } =>
    typeof item === 'object' &&
    item !== null &&
    'icon' in item &&
    'text' in item &&
    'href' in item
)
.map((item) => ({
  ...item,
  icon: typeof item.icon === 'string'
    ? <img src={item.icon} alt={`${item.text} icon`} />
    : item.icon
}))

        }
        pathsIds={[]}
        minDestopWidth={800}
      />
    </div>
    </div>
  );
}
