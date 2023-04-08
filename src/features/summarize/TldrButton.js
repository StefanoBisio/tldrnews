import React from 'react';

import styles from './TldrButton.module.css';

export const TldrButton = ({ onSummarize, buttonText, buttonStatus }) => {
  const getButtonClass = () => {
    switch (buttonStatus) {
      case 'initial':
        return styles.TldrButton;
      case 'loading':
        return styles.loading;
      case 'success':
        return styles.success;
      default:
        return styles.button;
    }
  };

  const buttonClass = getButtonClass();

  return (
    <div>
      <button className={buttonClass} onClick={buttonStatus == 'initial' ? onSummarize : null}>
        {buttonText || 'TL;DR'}
      </button>
    </div>
  );
};
