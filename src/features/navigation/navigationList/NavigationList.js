import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './NavigationList.module.css';

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export const NavigationList = ({ isOpen, children, handleClose }) => {
  return (
    <ul className={styles.list}>
      <AnimatePresence>
        {React.Children.map(children, (child, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={listItemVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            exit="hidden"
            className={`${styles.listItem} ${isOpen ? '' : styles.visuallyHidden}`}
          >
            <Link
              to={child.props.to}
              onClick={handleClose}
              onFocus={child.props.handleFocus}
              onBlur={child.props.handleBlur}
            >
              {child.props.children}
            </Link>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
