import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TldrButton } from '../summarize/TldrButton';
import { summarizeArticle } from '../article/articleSlice';
import styles from './ArticleModal.module.css';

const ArticleModal = ({ article, onClose }) => {
    const { title, content, image_url } = article;

    const displayedArticle = useSelector((state) => state.article.displayedArticle);

    const dispatch = useDispatch();

    const handleSummarize = () => {
        dispatch(summarizeArticle(content));
    };

      // handles clicks on the modal background
      const handleClick = (e) => {
        // If the click target is the same as the current target (i.e. the modal background)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // handles clicks on the close button
    const handleCloseButtonClick = (e) => {
        e.stopPropagation();
        onClose();
    };


    return (
        <div className={styles.modal} onMouseDown={handleClick}>
            <div className={styles.modalContent} >
                <button className={styles.modalCloseButton} onClick={handleCloseButtonClick}>X</button>
                {image_url && (
                    <img
                        src={image_url}
                        alt="article image"
                        className={styles.image}
                    />
                )}
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.content}>{displayedArticle.content || content}</p>
                <TldrButton onSummarize={handleSummarize} />
            </div>
        </div>
    );
};

export default ArticleModal;
