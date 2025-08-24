import React from "react";
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ChatHeader = ({ activeTab, onClose }) => {
  const getHeaderInfo = () => {
    switch (activeTab) {
      case "home":
        return {
          title: "Welcome",
          subtitle: "Get started with quick actions",
        };
      case "messages":
        return {
          title: "Messages",
          subtitle: "Your conversation history",
        };
      case "help":
        return {
          title: "Help Center",
          subtitle: "Find answers and support",
        };
      case "news":
        return {
          title: "Latest News",
          subtitle: "Stay updated with insights",
        };
      default:
        return {
          title: "Welcome",
          subtitle: "Get started with quick actions",
        };
    }
  };

  const headerInfo = getHeaderInfo();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{headerInfo.title}</h3>
            <p className="text-blue-100">{headerInfo.subtitle}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <svg
            className="w-5 h-5 text-white"
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

      {/* Quick Stats */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>4 agents online</span>
          </div>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4" />
            <span>Avg. response: 2 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
