import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const MessageItem = ({ message, formatTime, formatFileSize, isImageFile }) => {
  const isUser = message.sender === "user";

  const renderMessageContent = () => {
    switch (message.type) {
      case "text":
        return <p className="text-sm">{message.text}</p>;
      case "file":
        return (
          <FileMessage
            message={message}
            formatFileSize={formatFileSize}
            isImageFile={isImageFile}
          />
        );
      case "gif":
        return <GifMessage message={message} />;
      default:
        return <p className="text-sm">{message.text}</p>;
    }
  };

  const FileMessage = ({ message, formatFileSize, isImageFile }) => {
    if (isImageFile(message.fileType)) {
      return (
        <div className="max-w-xs">
          <img
            src={URL.createObjectURL(message.file)}
            alt={message.fileName}
            className="rounded-lg max-w-full h-auto max-h-48 object-cover"
          />
          <p className="text-xs text-gray-200 mt-1">{message.fileName}</p>
        </div>
      );
    } else {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 max-w-xs">
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {message.fileName}
              </p>
              <p className="text-xs text-gray-500">
                {formatFileSize(message.fileSize)}
              </p>
            </div>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(message.file);
                link.download = message.fileName;
                link.click();
              }}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    }
  };

  const GifMessage = ({ message }) => (
    <div className="max-w-xs">
      <img
        src={message.gif.url}
        alt={message.gif.title}
        className="rounded-lg max-w-full h-auto max-h-48 object-cover"
      />
      <p className="text-xs text-gray-200 mt-1">{message.gif.title}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-white text-gray-800 rounded-bl-md shadow-sm"
        }`}
      >
        {renderMessageContent()}
        <p className="text-xs mt-1 opacity-70">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
};

export default MessageItem;
