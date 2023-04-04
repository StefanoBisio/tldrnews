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

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent}>
                {/* <button className={styles.modalCloseButton}>X</button> */}
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
