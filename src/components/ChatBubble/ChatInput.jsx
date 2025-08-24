import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import CustomEmojiPicker from "./CustomEmojiPicker";
import CustomGifPicker from "./CustomGifPicker";

const ChatInput = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
  handleKeyPress,
  handleFileUpload,
  showEmojiPicker,
  setShowEmojiPicker,
  showGifPicker,
  setShowGifPicker,
  emojiPickerRef,
  gifPickerRef,
  fileInputRef,
  inputRef,
  handleEmojiSelect,
  handleGifSelect,
}) => {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />

          {/* Emoji and GIF buttons */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              😊
            </button>
            <button
              onClick={() => setShowGifPicker(!showGifPicker)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              🎬
            </button>
          </div>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileUpload}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.txt"
      />

      {/* Emoji Picker */}
      <AnimatePresence>
        {showEmojiPicker && (
          <CustomEmojiPicker
            emojiPickerRef={emojiPickerRef}
            setShowEmojiPicker={setShowEmojiPicker}
            handleEmojiSelect={handleEmojiSelect}
          />
        )}
      </AnimatePresence>

      {/* GIF Picker */}
      <AnimatePresence>
        {showGifPicker && (
          <CustomGifPicker
            gifPickerRef={gifPickerRef}
            setShowGifPicker={setShowGifPicker}
            handleGifSelect={handleGifSelect}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatInput;
