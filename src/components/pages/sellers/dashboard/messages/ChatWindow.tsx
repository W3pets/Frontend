import styles from './messages.module.scss';
import Image from 'next/image';
import { FiSend } from 'react-icons/fi';

function ChatWindow() {
  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>
        <Image
          src="/public/avatars/john.png"
          alt="John Doe"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <div className={styles.userDetails}>
          <div className={styles.name}>John Doe</div>
          <div className={styles.status}>Online</div>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.messageRow}>
          <div className={styles.messageBubble}>
            Hello! I'm interested in your German Shepherd puppy listing.
          </div>
        </div>
        <div className={`${styles.messageRow} ${styles.outgoing}`}>
          <div className={styles.messageBubbleOutgoing}>
            Hi! Yes, it's still available. Would you like to know more details?
          </div>
        </div>
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          className={styles.input}
        />
        <button className={styles.sendButton}>
          <FiSend />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
