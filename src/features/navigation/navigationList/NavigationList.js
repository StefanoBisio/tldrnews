import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export const NavigationList = ({ isOpen, children }) => {
  return (
    <ul className={styles.list}>
      <AnimatePresence>
        {isOpen &&
          React.Children.map(children, (child, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={styles.listItem}
            >
              {child}
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};
