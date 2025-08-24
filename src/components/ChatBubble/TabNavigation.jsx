import React from "react";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "messages", label: "Messages", icon: ChatBubbleLeftRightIcon },
    { id: "help", label: "Help", icon: QuestionMarkCircleIcon },
    { id: "news", label: "News", icon: NewspaperIcon },
  ];

  return (
    <div className="flex border-t border-gray-200 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex flex-col items-center justify-center space-y-1 px-3 py-3 text-xs font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? "text-blue-600 bg-blue-50"
              : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
          }`}
        >
          <tab.icon className="w-5 h-5" />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
