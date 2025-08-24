import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LightBulbIcon,
  BookOpenIcon,
  PhoneIcon,
  ArrowLeftIcon,
  CalendarIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

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

  // Common emojis for the custom picker
  const commonEmojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
  ];

  // Sample GIFs for demonstration
  const sampleGifs = [
    {
      id: 1,
      url: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: "Happy",
    },
    {
      id: 2,
      url: "https://media.giphy.com/media/26ufcVAJaOVwzLw5e/giphy.gif",
      title: "Laugh",
    },
    {
      id: 3,
      url: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: "Excited",
    },
    {
      id: 4,
      url: "https://media.giphy.com/media/26ufcVAJaOVwzLw5e/giphy.gif",
      title: "Funny",
    },
    {
      id: 5,
      url: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
      title: "Cool",
    },
    {
      id: 6,
      url: "https://media.giphy.com/media/26ufcVAJaOVwzLw5e/giphy.gif",
      title: "Awesome",
    },
  ];

  // FAQ data for Help tab
  const faqs = [
    {
      id: 1,
      question: "How do I get started with the platform?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete your profile setup, and follow our step-by-step onboarding guide. We also offer free training sessions for new users.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.",
    },
    {
      id: 3,
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through live chat, email at support@example.com, or call us at 1-800-HELP-NOW. We typically respond within 2 hours.",
    },
    {
      id: 4,
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan at any time during or after the trial period.",
    },
    {
      id: 5,
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and you can reactivate anytime.",
    },
    {
      id: 6,
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked.",
    },
  ];

  // Blog data for News tab
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2024",
      excerpt:
        "Explore the latest trends and technologies that are shaping the future of web development, from AI-powered tools to advanced frameworks.",
      content: `The landscape of web development is evolving at an unprecedented pace, driven by emerging technologies and changing user expectations. In 2024, we're witnessing a paradigm shift that's redefining how we build and deploy web applications.

Artificial Intelligence and Machine Learning are no longer just buzzwords—they're becoming integral parts of the development workflow. AI-powered code completion tools, automated testing frameworks, and intelligent debugging systems are helping developers write better code faster than ever before.

The rise of WebAssembly (Wasm) is enabling near-native performance in the browser, opening up new possibilities for complex applications that were previously only possible with desktop software. This technology is particularly exciting for gaming, video editing, and scientific computing applications.

Progressive Web Apps (PWAs) continue to gain traction, offering app-like experiences without the need for app store distribution. With improved offline capabilities and push notifications, PWAs are bridging the gap between web and native applications.

The adoption of modern CSS features like Grid, Flexbox, and CSS Custom Properties has revolutionized layout design, making it easier to create responsive and maintainable designs. CSS-in-JS solutions are also gaining popularity for component-based architectures.

Performance and accessibility remain top priorities, with Core Web Vitals becoming crucial metrics for SEO and user experience. Developers are increasingly focusing on optimizing loading times, interactivity, and visual stability.

As we look ahead, the future of web development promises even more exciting innovations, from quantum computing applications to immersive AR/VR experiences. The key to success will be staying adaptable and continuously learning new technologies.`,
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Development", "AI", "Future Tech"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      views: 1247,
      likes: 89,
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "Learn the essential patterns and practices for building large-scale React applications that can grow with your business needs.",
      content: `Building scalable React applications requires careful consideration of architecture, state management, and performance optimization. As applications grow in complexity, maintaining code quality and performance becomes increasingly challenging.

Component architecture is the foundation of any scalable React application. Breaking down complex UIs into reusable, composable components not only improves maintainability but also enables better testing and debugging. Using a consistent naming convention and folder structure helps teams collaborate effectively.

State management is crucial for applications with complex data flows. While React's built-in state and Context API work well for smaller applications, larger applications often benefit from dedicated state management libraries like Redux Toolkit, Zustand, or Jotai. The key is choosing the right tool for your specific use case.

Performance optimization should be considered from the start. React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders. Code splitting with React.lazy and Suspense helps reduce initial bundle size, improving loading times for users.

Testing strategies should include unit tests for individual components, integration tests for component interactions, and end-to-end tests for critical user flows. Tools like Jest, React Testing Library, and Cypress provide comprehensive testing capabilities.

Accessibility should never be an afterthought. Following WCAG guidelines and using semantic HTML ensures your application is usable by people with disabilities. This includes proper ARIA labels, keyboard navigation support, and screen reader compatibility.

As your application scales, monitoring and analytics become essential. Tracking performance metrics, error rates, and user behavior helps identify areas for improvement and ensures a smooth user experience.`,
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Development",
      tags: ["React", "Scalability", "Best Practices"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      views: 892,
      likes: 67,
    },
    {
      id: 3,
      title: "The Rise of TypeScript: Why It's Becoming Essential",
      excerpt:
        "Discover how TypeScript is transforming the JavaScript ecosystem and why more developers are adopting it for their projects.",
      content: `TypeScript has emerged as a game-changer in the JavaScript ecosystem, offering developers the benefits of static typing while maintaining the flexibility of JavaScript. Its adoption has grown exponentially, with major frameworks and libraries now built with TypeScript support in mind.

The primary advantage of TypeScript is its type system, which catches errors at compile time rather than runtime. This leads to more reliable code and better developer experience through improved IDE support, including autocomplete, refactoring tools, and inline documentation.

TypeScript's gradual adoption approach allows teams to migrate existing JavaScript codebases incrementally. You can start with a few files and gradually add types as you go, making the transition smooth and manageable.

The language's advanced type system includes features like union types, intersection types, generics, and conditional types. These powerful constructs enable developers to model complex data structures and create flexible, reusable code.

TypeScript's integration with modern build tools and frameworks is seamless. Whether you're using Create React App, Next.js, Vite, or custom webpack configurations, TypeScript support is readily available and well-documented.

The ecosystem around TypeScript is thriving, with excellent tooling support from VS Code and other editors. The TypeScript compiler provides detailed error messages and suggestions, helping developers write better code and learn from their mistakes.

As the JavaScript ecosystem continues to evolve, TypeScript is positioned to become the standard for large-scale applications. Its ability to catch errors early, improve developer productivity, and enhance code maintainability makes it an essential tool for modern web development.`,
      author: "Emily Watson",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Programming",
      tags: ["TypeScript", "JavaScript", "Development"],
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
      views: 1156,
      likes: 94,
    },
  ];

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

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
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

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isImageFile = (fileType) => {
    return fileType.startsWith("image/");
  };

  // Typing indicator component
  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-md px-3 py-2 max-w-xs">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <p className="text-xs text-gray-200 mt-1">Agent is typing...</p>
      </div>
    </motion.div>
  );

  // File message component
  const FileMessage = ({ message }) => {
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

  // GIF message component
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

  // Custom Emoji Picker Component
  const CustomEmojiPicker = () => (
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

  // Custom GIF Picker Component
  const CustomGifPicker = () => (
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

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="p-6">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Need Help?
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Hi there 👋
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ask us anything, or share your valuable feedback with us.
              </p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: ChatBubbleLeftRightIcon,
                  title: "Start Chat",
                  color: "from-blue-500 to-blue-600",
                  action: () => setShowChat(true),
                },
                {
                  icon: QuestionMarkCircleIcon,
                  title: "Help Center",
                  color: "from-purple-500 to-purple-600",
                  action: () => setActiveTab("help"),
                },
                {
                  icon: NewspaperIcon,
                  title: "Latest News",
                  color: "from-green-500 to-green-600",
                  action: () => setActiveTab("news"),
                },
                {
                  icon: ChatBubbleLeftRightIcon,
                  title: "Messages",
                  color: "from-orange-500 to-orange-600",
                  action: () => setActiveTab("messages"),
                },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={item.action}
                  className={`bg-gradient-to-r ${item.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <item.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Chat Now Button - Prominent CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Need Help Right Now?
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Chat with our support team instantly. We're here to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowChat(true)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 mx-auto"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Chat Now</span>
              </motion.button>
            </div>
          </div>
        );

      case "messages":
        return (
          <div className="p-6">
            {/* Back to Home Button */}
            <div className="mb-6">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={() => setActiveTab("home")}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Home</span>
              </motion.button>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Messages
              </h1>
              <p className="text-gray-600 text-sm">
                Stay connected with your conversations
              </p>
            </div>

            <div className="space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : "bg-gradient-to-r from-purple-500 to-purple-600"
                        }`}
                      >
                        {message.sender === "user" ? "U" : "A"}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {message.sender === "user" ? "You" : "Support Agent"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatTime(message.timestamp)}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {message.text}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {message.sender === "agent" ? (
                            <div className="flex items-center space-x-1 text-green-600 text-xs">
                              <CheckCircleIcon className="w-3 h-3" />
                              <span>Read</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-1 text-blue-600 text-xs">
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                              <span>Unread</span>
                            </div>
                          )}
                        </div>

                        <button className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "help":
        return (
          <div className="p-6">
            {/* Back to Home Button */}
            <div className="mb-6">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={() => setActiveTab("home")}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Home</span>
              </motion.button>
            </div>

            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <QuestionMarkCircleIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Help Center
              </h1>
              <p className="text-gray-600 text-sm">
                Find answers to your questions and get support
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <QuestionMarkCircleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                {
                  icon: BookOpenIcon,
                  title: "Documentation",
                  description: "Browse our comprehensive guides",
                },
                {
                  icon: LightBulbIcon,
                  title: "Tips & Tricks",
                  description: "Learn best practices and shortcuts",
                },
                {
                  icon: PhoneIcon,
                  title: "Contact Support",
                  description: "Get help from our team",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
                <h2 className="text-lg font-semibold text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {faqs
                  .filter(
                    (faq) =>
                      faq.question
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      faq.answer
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                  )
                  .map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left flex items-center justify-between focus:outline-none group"
                      >
                        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 ml-4"
                        >
                          {expandedFaq === faq.id ? (
                            <ChevronUpIcon className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                          )}
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedFaq === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3">
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "news":
        if (selectedBlog) {
          return (
            <div className="p-6">
              {/* Back Button */}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => setSelectedBlog(null)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to News</span>
              </motion.button>

              {/* Blog Detail */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{formatDate(selectedBlog.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <UserIcon className="w-4 h-4" />
                      <span>{selectedBlog.author}</span>
                    </div>
                    <span>{selectedBlog.readTime}</span>
                  </div>

                  <h1 className="text-xl font-bold text-gray-800 mb-3">
                    {selectedBlog.title}
                  </h1>

                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {selectedBlog.category}
                    </span>
                    <div className="flex space-x-1">
                      {selectedBlog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    {selectedBlog.content
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-3">
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(selectedBlog.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          likedBlogs.has(selectedBlog.id)
                            ? "text-red-600 bg-red-50"
                            : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                        }`}
                      >
                        <HeartIcon
                          className={`w-4 h-4 ${
                            likedBlogs.has(selectedBlog.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                        <span className="text-sm">
                          {selectedBlog.likes +
                            (likedBlogs.has(selectedBlog.id) ? 1 : 0)}
                        </span>
                      </button>

                      <div className="flex items-center space-x-2 text-gray-500">
                        <EyeIcon className="w-4 h-4" />
                        <span className="text-sm">{selectedBlog.views}</span>
                      </div>
                    </div>

                    <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        }

        return (
          <div className="p-6">
            {/* Back to Home Button */}
            <div className="mb-6">
              <motion.button
                whileHover={{ x: -5 }}
                onClick={() => setActiveTab("home")}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Home</span>
              </motion.button>
            </div>

            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <NewspaperIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Latest News
              </h1>
              <p className="text-gray-600 text-sm">
                Stay updated with the latest insights and trends
              </p>
            </div>

            <div className="space-y-3">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {/* Image at the top */}
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-32 object-cover"
                    />
                    {/* Category badge overlay on image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                    {/* Read time overlay on image */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Date */}
                    <div className="flex items-center justify-end mb-3">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <CalendarIcon className="w-3 h-3" />
                        <span className="text-xs">{formatDate(blog.date)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Author and excerpt */}
                    <div className="mb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                          <UserIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          {blog.author}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Footer with stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(blog.id);
                          }}
                          className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                            likedBlogs.has(blog.id)
                              ? "text-red-600 bg-red-50"
                              : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                          }`}
                        >
                          <HeartIcon
                            className={`w-4 h-4 ${
                              likedBlogs.has(blog.id) ? "fill-current" : ""
                            }`}
                          />
                          <span className="text-sm font-medium">
                            {blog.likes + (likedBlogs.has(blog.id) ? 1 : 0)}
                          </span>
                        </button>

                        <div className="flex items-center space-x-2 text-gray-500">
                          <EyeIcon className="w-4 h-4" />
                          <span className="text-sm">{blog.views} views</span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle share functionality
                        }}
                        className="flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        <ShareIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Main chat interface
  if (showChat) {
    return (
      <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
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
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-white text-gray-800 rounded-bl-md shadow-sm"
                }`}
              >
                {message.type === "text" && (
                  <p className="text-sm">{message.text}</p>
                )}
                {message.type === "file" && <FileMessage message={message} />}
                {message.type === "gif" && <GifMessage message={message} />}
                <p className="text-xs mt-1 opacity-70">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </motion.div>
          ))}

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={newMessage}
                onChange={handleInputChange}
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
            {showEmojiPicker && <CustomEmojiPicker />}
          </AnimatePresence>

          {/* GIF Picker */}
          <AnimatePresence>
            {showGifPicker && <CustomGifPicker />}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Main interface with tabs
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full chat-bubble-shadow cursor-pointer flex items-center justify-center hover:shadow-3xl transition-all duration-300 btn-hover-effect"
        >
          <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center pulse-glow">
            <span className="text-xs text-white font-bold">3</span>
          </div>
        </motion.div>
      )}

      {/* Expanded Chat Interface */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-[400px] h-[700px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {activeTab === "home" && "Welcome"}
                    {activeTab === "messages" && "Messages"}
                    {activeTab === "help" && "Help Center"}
                    {activeTab === "news" && "Latest News"}
                  </h3>
                  <p className="text-blue-100">
                    {activeTab === "home" && "Get started with quick actions"}
                    {activeTab === "messages" && "Your conversation history"}
                    {activeTab === "help" && "Find answers and support"}
                    {activeTab === "news" && "Stay updated with insights"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
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

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto bg-gray-50 chat-scrollbar">
            {renderTabContent()}
          </div>

          {/* Tab Navigation - Moved to Bottom */}
          <div className="flex border-t border-gray-200 bg-white">
            {[
              { id: "home", label: "Home", icon: HomeIcon },
              {
                id: "messages",
                label: "Messages",
                icon: ChatBubbleLeftRightIcon,
              },
              { id: "help", label: "Help", icon: QuestionMarkCircleIcon },
              { id: "news", label: "News", icon: NewspaperIcon },
            ].map((tab) => (
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
        </motion.div>
      )}
    </div>
  );
};

export default ChatBubble;
