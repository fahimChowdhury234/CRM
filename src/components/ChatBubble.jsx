import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

// Import components
import ChatInterface from "./ChatBubble/ChatInterface";
import ChatHeader from "./ChatBubble/ChatHeader";
import TabContent from "./ChatBubble/TabContent";
import TabNavigation from "./ChatBubble/TabNavigation";

// Import data and utilities
import { faqs, blogs } from "./ChatBubble/data";
import {
  formatTime,
  formatFileSize,
  formatDate,
  isImageFile,
} from "./ChatBubble/utils";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showChat, setShowChat] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 60000),
      type: "text",
    },
    {
      id: 2,
      text: "I have a question about your service",
      sender: "user",
      timestamp: new Date(Date.now() - 30000),
      type: "text",
    },
    {
      id: 3,
      text: "Of course! I'd be happy to help. What would you like to know?",
      sender: "agent",
      timestamp: new Date(Date.now() - 15000),
      type: "text",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState(new Set());

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const gifPickerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle click outside to close pickers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
      if (
        gifPickerRef.current &&
        !gifPickerRef.current.contains(event.target)
      ) {
        setShowGifPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage.trim(),
        sender: "user",
        timestamp: new Date(),
        type: "text",
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
      setShowEmojiPicker(false);
      setShowGifPicker(false);

      // Show typing indicator
      setIsTyping(true);

      // Simulate agent response after 2 seconds with typing indicator
      setTimeout(() => {
        setIsTyping(false);
        const agentResponse = {
          id: Date.now() + 1,
          text: "Thanks for your message! I'll get back to you soon.",
          sender: "agent",
          timestamp: new Date(),
          type: "text",
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiSelect = (emoji) => {
    // Send emoji as a message immediately
    const message = {
      id: Date.now(),
      text: emoji,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };
    setMessages((prev) => [...prev, message]);

    // Close emoji picker
    setShowEmojiPicker(false);

    // Show typing indicator
    setIsTyping(true);

    // Simulate agent response after 2 seconds
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse = {
        id: Date.now() + 1,
        text: "Nice emoji! 😄",
        sender: "agent",
        timestamp: new Date(),
        type: "text",
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 2000);
  };

  const handleGifSelect = (gif) => {
    const message = {
      id: Date.now(),
      gif: gif,
      sender: "user",
      timestamp: new Date(),
      type: "gif",
    };
    setMessages((prev) => [...prev, message]);
    setShowGifPicker(false);

    // Show typing indicator
    setIsTyping(true);

    // Simulate agent response after 2 seconds
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse = {
        id: Date.now() + 1,
        text: "Great GIF! 😄",
        sender: "agent",
        timestamp: new Date(),
        type: "text",
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const message = {
        id: Date.now(),
        file: file,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        sender: "user",
        timestamp: new Date(),
        type: "file",
      };
      setMessages((prev) => [...prev, message]);
      setShowEmojiPicker(false);
      setShowGifPicker(false);

      // Show typing indicator
      setIsTyping(true);

      // Simulate agent response after 2 seconds
      setTimeout(() => {
        setIsTyping(false);
        const agentResponse = {
          id: Date.now() + 1,
          text: `I've received your file: ${file.name}`,
          sender: "agent",
          timestamp: new Date(),
          type: "text",
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 2000);

      // Reset file input
      event.target.value = null;
    }
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleBackToHome = () => {
    setShowChat(false);
    setActiveTab("home");
  };

  const handleLike = (blogId) => {
    setLikedBlogs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(blogId)) {
        newSet.delete(blogId);
      } else {
        newSet.add(blogId);
      }
      return newSet;
    });
  };

  // Main chat interface
  if (showChat) {
    return (
      <ChatInterface
        messages={messages}
        isTyping={isTyping}
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
        formatTime={formatTime}
        formatFileSize={formatFileSize}
        isImageFile={isImageFile}
        handleEmojiSelect={handleEmojiSelect}
        handleGifSelect={handleGifSelect}
        handleBackToHome={handleBackToHome}
        messagesEndRef={messagesEndRef}
      />
    );
  }

  // Main interface with tabs
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Bubble - Only show when not open */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onClick={() => setIsOpen(true)}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full chat-bubble-shadow cursor-pointer flex items-center justify-center z-30"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center pulse-glow"
            >
              <span className="text-xs text-white font-bold">3</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Chat Interface */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
              y: 50,
              rotateX: -15,
              transformOrigin: "bottom right",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              y: 50,
              rotateX: -15,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="w-[400px] h-[700px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50 absolute bottom-0 right-0"
          >
            {/* Header */}
            <ChatHeader
              activeTab={activeTab}
              onClose={() => setIsOpen(false)}
            />

            {/* Tab Content */}
            <TabContent
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setShowChat={setShowChat}
              messages={messages}
              formatTime={formatTime}
              expandedFaq={expandedFaq}
              toggleFaq={toggleFaq}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedBlog={selectedBlog}
              setSelectedBlog={setSelectedBlog}
              likedBlogs={likedBlogs}
              handleLike={handleLike}
              formatDate={formatDate}
              faqs={faqs}
              blogs={blogs}
            />

            {/* Tab Navigation */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBubble;
