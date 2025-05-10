// Popup.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Popup.css'

const Popup = ({ msg, pop }) => {
  return (
    <AnimatePresence>
      {pop && (
        <motion.div
          className="popup-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
