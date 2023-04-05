import React from 'react';

import styles from './TldrButton.module.css';

export const TldrButton = ({ onSummarize, buttonText, buttonClass }) => {
  return (
    <div>
    <button className={buttonClass || styles.button} onClick={onSummarize}>
        {buttonText || 'TL;DR'}
      </button>
    </div>
  );
};
