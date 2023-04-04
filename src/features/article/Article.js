import React, { useState } from 'react';
import ArticleModal from '../articleModal/ArticleModal';
import styles from './Article.module.css';

export const Article = ({ article }) => {

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
      {image_url && (
        <img
          src={image_url}
          alt="article image"
          className={styles.image}
        />
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{content}</p>

      {isModalOpen && (
        <ArticleModal
          article={article}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

