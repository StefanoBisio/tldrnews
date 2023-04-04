import React from 'react';

import styles from './TldrButton.module.css';

export const TldrButton = ({ onSummarize }) => {
  return (
    <div>
      <button onClick={onSummarize} className={styles.button}>
        TL:DR😪
      </button>
    </div>
  );
};
