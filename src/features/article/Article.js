import React, { useState } from 'react';
import ArticleModal from '../articleModal/ArticleModal';
import styles from './Article.module.css';
import defaultThumbnail from '../../TLDR-22.png'


export const Article = ({ article, index, summaries, setSummaries }) => {

  const { title, content, image_url } = article;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.previewContainer} onClick={openModal}>
      {image_url ? (
        <img
          src={image_url}
          alt=""
          className={styles.image}
        />
      ) : (
        <img
          src={defaultThumbnail}
          alt=""
          className={styles.image}
        />
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{content}</p>

      {isModalOpen && (
        <ArticleModal
          article={article}
          onClose={closeModal}
          index={index}
          summaries={summaries}
          setSummaries={setSummaries}
        />
      )}
    </div>
  );
};

