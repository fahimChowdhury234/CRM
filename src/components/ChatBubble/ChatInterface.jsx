import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import MessageItem from "./MessageItem";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

const ChatInterface = ({
  messages,
  isTyping,
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
  formatTime,
  formatFileSize,
  isImageFile,
  handleEmojiSelect,
  handleGifSelect,
  handleBackToHome,
  messagesEndRef,
}) => {
  return (
    <div className="fixed bottom-4 right-4 w-[400px] h-[700px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-sm text-blue-100">
                We typically reply in a few minutes
              </p>
            </div>
          </div>
          <button
            onClick={handleBackToHome}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            formatTime={formatTime}
            formatFileSize={formatFileSize}
            isImageFile={isImageFile}
          />
        ))}

        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        handleKeyPress={handleKeyPress}
        handleFileUpload={handleFileUpload}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        showGifPicker={showGifPicker}
        setShowGifPicker={setShowGifPicker}
        emojiPickerRef={emojiPickerRef}
        gifPickerRef={gifPickerRef}
        fileInputRef={fileInputRef}
        inputRef={inputRef}
        handleEmojiSelect={handleEmojiSelect}
        handleGifSelect={handleGifSelect}
      />
    </div>
  );
};

export default ChatInterface;
