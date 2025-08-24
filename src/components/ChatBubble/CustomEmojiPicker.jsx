import React from "react";
import { motion } from "framer-motion";
import { commonEmojis } from "./data";

const CustomEmojiPicker = ({
  emojiPickerRef,
  setShowEmojiPicker,
  handleEmojiSelect,
}) => {
  return (
    <motion.div
      ref={emojiPickerRef}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute bottom-20 left-4 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 max-w-72"
    >
      <div className="grid grid-cols-10 gap-2 max-h-48 overflow-y-auto">
        {commonEmojis.map((emoji, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleEmojiSelect(emoji)}
            className="w-8 h-8 text-lg hover:bg-gray-100 rounded-lg transition-all duration-200 flex items-center justify-center"
            title={emoji}
          >
            {emoji}
          </motion.button>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">Click emoji to send</p>
      </div>
    </motion.div>
  );
};

export default CustomEmojiPicker;
