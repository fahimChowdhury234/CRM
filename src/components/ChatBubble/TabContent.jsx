import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  BookOpenIcon,
  LightBulbIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CalendarIcon,
  UserIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const TabContent = ({
  activeTab,
  setActiveTab,
  setShowChat,
  messages,
  formatTime,
  expandedFaq,
  toggleFaq,
  searchQuery,
  setSearchQuery,
  selectedBlog,
  setSelectedBlog,
  likedBlogs,
  handleLike,
  formatDate,
  faqs,
  blogs,
}) => {
  const renderHomeTab = () => (
    <div className="p-6">
      {/* Hero Section with Gradient Background */}
      <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 border border-blue-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back! 👋
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
            How can we assist you today? Our support team is ready to help with
            any questions or concerns.
          </p>
        </div>
      </div>

      {/* Quick Actions Grid with Enhanced Design */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          {
            icon: ChatBubbleLeftRightIcon,
            title: "Live Chat",
            subtitle: "Instant Support",
            color: "from-blue-500 to-blue-600",
            bgColor: "from-blue-50 to-blue-100",
            action: () => setShowChat(true),
          },
          {
            icon: QuestionMarkCircleIcon,
            title: "Help Center",
            subtitle: "Find Answers",
            color: "from-purple-500 to-purple-600",
            bgColor: "from-purple-50 to-purple-100",
            action: () => setActiveTab("help"),
          },
          {
            icon: NewspaperIcon,
            title: "Latest News",
            subtitle: "Stay Updated",
            color: "from-emerald-500 to-emerald-600",
            bgColor: "from-emerald-50 to-emerald-100",
            action: () => setActiveTab("news"),
          },
          {
            icon: ChatBubbleLeftRightIcon,
            title: "Messages",
            subtitle: "View History",
            color: "from-orange-500 to-orange-600",
            bgColor: "from-orange-50 to-orange-100",
            action: () => setActiveTab("messages"),
          },
        ].map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={item.action}
            className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-xl`}
            style={{
              background: `linear-gradient(135deg, ${
                item.bgColor.split(" ")[1]
              }, ${item.bgColor.split(" ")[3]})`,
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${
                  item.color.split(" ")[1]
                }, ${item.color.split(" ")[3]})`,
              }}
            ></div>

            <div className="relative z-10 flex flex-col items-center space-y-3">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <span className="block text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </span>
                <span className="block text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                  {item.subtitle}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 text-center mb-6 shadow-xl">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            Need Immediate Assistance?
          </h3>
          <p className="text-blue-100 text-sm mb-6 leading-relaxed max-w-xs mx-auto">
            Our expert support team is online and ready to help you right now.
            Get instant answers to your questions!
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowChat(true)}
            className="group bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-xl"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Start Chat Now</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Support Stats */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-xs text-gray-500">Support Available</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-green-600">2min</div>
            <div className="text-xs text-gray-500">Avg Response</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-purple-600">98%</div>
            <div className="text-xs text-gray-500">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMessagesTab = () => (
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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Messages</h1>
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

  const renderHelpTab = () => (
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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Help Center</h1>
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
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
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

  const renderNewsTab = () => {
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
                {selectedBlog.content.split("\n\n").map((paragraph, index) => (
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
                        likedBlogs.has(selectedBlog.id) ? "fill-current" : ""
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
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Latest News</h1>
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
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return renderHomeTab();
      case "messages":
        return renderMessagesTab();
      case "help":
        return renderHelpTab();
      case "news":
        return renderNewsTab();
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 chat-scrollbar">
      {renderTabContent()}
    </div>
  );
};

export default TabContent;
