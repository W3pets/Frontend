import styles from './messages.module.scss';
import Image from 'next/image';

const mockConversations = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Is the German Shepherd still available?',
    time: '2 min ago',
    avatar: '/avatars/john.png', // Correct path for Next.js public folder
  },
  {
    id: 2,
    name: 'Sarah Smith',
    message: 'Thank you for the information',
    time: '1 hour ago',
    avatar: '/avatars/sarah.png', // Correct path for Next.js public folder
  },
  {
    id: 3,
    name: 'Mike Johnson',
    message: 'Can you send more pictures?',
    time: '2 hours ago',
    avatar: '/avatars/mike.png', // Correct path for Next.js public folder
    unread: true,
  },
];

function ChatSidebar() {
  return (
    <div className={styles.sidebar}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search messages..."
      />
      <div className={styles.conversationList}>
        {mockConversations.map((c) => (
          <div key={c.id} className={styles.conversation}>
            <Image
              src={c.avatar}
              alt={c.name}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.details}>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.message}>{c.message}</div>
            </div>
            <div className={styles.meta}>
              <div className={styles.time}>{c.time}</div>
              {c.unread && <div className={styles.unreadDot} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
