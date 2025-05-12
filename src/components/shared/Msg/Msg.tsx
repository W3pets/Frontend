'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import globalSlice from '@/lib/store/slices/globalSlice';

function Msg() {
  const dispath = useAppDispatch();
  const msg = useAppSelector((store) => store.global.msg);

  const [progress, setProgress] = useState(100); // 100% to 0%

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleDelay = async () => {
    const duration = (msg?.time || 7) * 1000;
    const intervalTime = 100; // update every 100ms
    const decrement = (intervalTime / duration) * 100;

    await new Promise((resolve, reject) => {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev <= decrement) {
            if (timerRef.current) clearInterval(timerRef.current);
            resolve(0);
          }
          return prev - decrement;
        });
      }, intervalTime);
    });
  };

  // Start the auto-dismiss timer and update the progress bar.
  useEffect(() => {
    if (!msg) return;

    (async () => {
      await handleDelay();
      dispath(globalSlice.actions.resetMsg());
      setProgress(100);
    })();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(100);
    };
  }, [msg]);

  // Manually dismiss the toast.
  const handleClose = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    dispath(globalSlice.actions.resetMsg());
    setProgress(100);
  };

  return (
    !!msg && (
      <div className={`${styles.background_message} ${styles[msg.category]}`}>
        <div className={styles.background_message_content}>
          <div className={styles.background_message_text}>
            {msg.message.split(/\n/).map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
          <button
            className={styles.background_message_close}
            onClick={handleClose}
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
        <div className={styles.background_message_progress_bar}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      </div>
    )
  );
}

export default Msg;
