'use client';

import React from 'react';
import styles from '../styles.module.scss';
import { HiOutlineDocument } from 'react-icons/hi2';

type FileMessageItemProps = {
  fileName: string;
  fileSize: number; // in bytes
};

export default function FileMessageItem({
  fileName,
  fileSize,
}: FileMessageItemProps) {
  //function for formattingg size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={styles.file_message_item}>
      <HiOutlineDocument className={styles.file_icon} />
      <div className={styles.file_details}>
        <span className={styles.file_name}>{fileName}</span>
        <span className={styles.file_size}>{formatFileSize(fileSize)}</span>
      </div>
    </div>
  );
}
