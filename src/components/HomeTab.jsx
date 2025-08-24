import React from "react";
import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";

const HomeTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          React Chat Bubble Widget
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A beautiful chat widget similar to Intercom's chat bubble
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Features
          </h2>
          <ul className="text-left space-y-2 text-gray-600">
            {[
              "Floating chat button positioned at bottom-right",
              "Smooth animations using Framer Motion",
              "Responsive design with Tailwind CSS",
              "Real-time message handling",
              "Auto-scroll to latest messages",
            ].map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 p-4 bg-gray-50 rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm text-gray-600">
              <strong>Tip:</strong> Click the chat bubble in the bottom-right
              corner to start chatting!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Chat Bubble Widget */}
      <ChatBubble />
    </motion.div>
  );
};

export default HomeTab;
