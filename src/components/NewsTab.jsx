import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const NewsTab = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState(new Set());

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (selectedBlog) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setSelectedBlog(null)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-5 h-5" />
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
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedBlog.title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {selectedBlog.category}
              </span>
              <div className="flex space-x-2">
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

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {selectedBlog.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleLike(selectedBlog.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    likedBlogs.has(selectedBlog.id)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                  }`}
                >
                  <HeartIcon
                    className={`w-5 h-5 ${
                      likedBlogs.has(selectedBlog.id) ? "fill-current" : ""
                    }`}
                  />
                  <span>
                    {selectedBlog.likes +
                      (likedBlogs.has(selectedBlog.id) ? 1 : 0)}
                  </span>
                </button>

                <div className="flex items-center space-x-2 text-gray-500">
                  <EyeIcon className="w-5 h-5" />
                  <span>{selectedBlog.views}</span>
                </div>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                <ShareIcon className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Latest News & Updates
        </h1>
        <p className="text-gray-600">
          Stay informed with the latest insights and developments
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <UserIcon className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{blog.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HeartIcon className="w-4 h-4" />
                      <span>{blog.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NewsTab;
