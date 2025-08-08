'use client';

import React from 'react';
import styles from './styles.module.scss';

const AbrahamDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles['sidebar-header']}>Abraham Dashboard</div>
        <nav className={styles.menu}>
          <a href="#" className={styles.active}>
            Dashboard <span className={`${styles.status} ${styles.online}`}>Online</span>
          </a>
          <a href="#">Products</a>
          <a href="#">Messages</a>
          <a href="#">Analytics</a>
          <a href="#">Notifications</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </nav>
        <footer>© 2025 W3pets. All rights reserved.</footer>
      </aside>
      <main className={styles.content}>
        <header className={styles['account-info']}>
          <h1>Seller Account</h1>
          <p>John Doe</p>
        </header>
        <section className={styles.messages}>
          <div className={styles['message-item']}>
            <strong>John Doe</strong>
            <p>Hello! I’m interested in your German Shepherd puppy listing.</p>
            <span className={styles.time}>2 min ago</span>
          </div>
          <div className={styles['message-item']}>
            <strong>Mike Johnson</strong>
            <p>Can you send more pictures?</p>
            <span className={styles.time}>2 hours ago</span>
          </div>
          <div className={styles['message-item']}>
            <strong>Sarah Smith</strong>
            <p>Yes, it’s still available, would you like to know more details?</p>
            <span className={styles.time}>1 hour ago</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AbrahamDashboard;
