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

export const NavigationList = ({ handleClose, isOpen, children }) => {

  return (
    <ul className={styles.list}>
      {/* AnimatePresence enables exit animations for its children when they're removed from the React tree. In this case, it's usedto animate motion.li elements when the navigation is closed. */}
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
              <Link to={child.props.to} onClick={handleClose}>
                {child.props.children}
              </Link>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};
