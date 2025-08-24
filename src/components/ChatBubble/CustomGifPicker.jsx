import React from "react";
import { motion } from "framer-motion";
import { sampleGifs } from "./data";

const CustomGifPicker = ({
  gifPickerRef,
  setShowGifPicker,
  handleGifSelect,
}) => {
  return (
    <motion.div
      ref={gifPickerRef}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute bottom-20 left-4 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 max-w-80"
    >
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Select a GIF</h3>
      <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
        {sampleGifs.map((gif) => (
          <motion.button
            key={gif.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGifSelect(gif)}
            className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <img
              src={gif.url}
              alt={gif.title}
              className="w-full h-20 object-cover"
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CustomGifPicker;
