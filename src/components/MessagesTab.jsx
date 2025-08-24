import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCircleIcon,
  ClockIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const MessagesTab = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hi! I have a question about your product.",
      time: "2 min ago",
      isRead: false,
      avatar: "JD",
    },
    {
      id: 2,
      sender: "Sarah Wilson",
      message: "Thanks for the quick response yesterday!",
      time: "1 hour ago",
      isRead: true,
      avatar: "SW",
    },
    {
      id: 3,
      sender: "Mike Johnson",
      message: "Can you help me with the setup process?",
      time: "3 hours ago",
      isRead: false,
      avatar: "MJ",
    },
    {
      id: 4,
      sender: "Emily Brown",
      message: "The new feature is working perfectly!",
      time: "1 day ago",
      isRead: true,
      avatar: "EB",
    },
    {
      id: 5,
      sender: "David Lee",
      message: "When will the next update be available?",
      time: "2 days ago",
      isRead: true,
      avatar: "DL",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Messages</h1>
        <p className="text-gray-600">Stay connected with your conversations</p>
      </motion.div>

      <div className="space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {message.avatar}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {message.sender}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {message.time}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {message.message}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {message.isRead ? (
                        <div className="flex items-center space-x-1 text-green-600">
                          <CheckCircleIcon className="w-4 h-4" />
                          <span className="text-sm">Read</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                          <span className="text-sm">Unread</span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <PaperAirplaneIcon className="w-4 h-4" />
                      <span>Reply</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {messages.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No messages yet
          </h3>
          <p className="text-gray-500">
            Start a conversation to see messages here
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MessagesTab;
