# React Chat Bubble Widget

A beautiful, responsive chat bubble widget component similar to Intercom's chat bubble, built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Floating Chat Button**: Positioned at bottom-right of the screen with smooth hover effects
- **Chat Window**: Opens above the bubble with smooth animations using Framer Motion
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts
- **Real-time Messaging**: Handle user messages and simulate agent responses
- **Auto-scroll**: Automatically scrolls to the latest messages
- **Typing Indicator**: Shows when the agent is "typing" a response with animated dots
- **Emoji Picker**: Custom emoji picker with 100+ common emojis
- **File Upload**: Support for images, PDFs, documents, and text files
- **File Preview**: Image thumbnails and file information with download capability
- **Clean UI**: Modern design with rounded corners, shadows, and proper spacing

## 🚀 New Features

### **Emoji Picker**

- Click the emoji button (😀) to open a custom emoji picker
- 100+ popular emojis organized in a grid layout
- Emojis are inserted at the cursor position in the text input
- Smooth animations and hover effects

### **File Upload**

- Click the paperclip 📎 icon to attach files
- Supports images, PDFs, Word documents, and text files
- **Image files**: Display as thumbnails with rounded corners
- **Other files**: Show file name, size, and download button
- Files are stored in chat state and can be downloaded

### **Typing Indicator**

- Shows "Agent is typing..." with three bouncing dots
- Appears when user sends a message
- Automatically disappears when agent responds
- Prevents sending multiple messages while waiting

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **Vite** - Fast build tool and dev server

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 💻 Usage

The `ChatBubble` component is self-contained and can be easily integrated into any React application:

```jsx
import ChatBubble from "./components/ChatBubble";

function App() {
  return (
    <div>
      {/* Your app content */}
      <ChatBubble />
    </div>
  );
}
```

## 🏗️ Component Structure

- **ChatBubble.jsx**: Main component with all features
- **Custom Emoji Picker**: Built-in emoji selection grid
- **File Upload Handler**: File processing and preview
- **Message Types**: Support for text and file messages
- **Typing Indicator**: Animated response indicator

## 🎯 Key Features

- **Toggle chat window** on button click
- **Send text messages** with Enter key or Send button
- **Insert emojis** at cursor position
- **Upload files** with drag & drop support
- **View file previews** for images and documents
- **Download files** with one-click download
- **Simulated agent responses** with typing indicators
- **Timestamp display** for each message
- **Responsive design** for mobile and desktop
- **Smooth animations** and transitions

## 🎨 Customization

The component can be easily customized by modifying:

- **Colors**: Update Tailwind classes for different themes
- **Emojis**: Modify the `commonEmojis` array
- **File types**: Update the `accept` attribute in file input
- **Animation parameters**: Adjust Framer Motion settings
- **Chat window dimensions**: Modify width, height, and positioning

## 📱 Browser Support

- Modern browsers with ES6+ support
- Responsive design for mobile and desktop
- Smooth animations with CSS transforms and transitions
- File upload and preview functionality

## 🔧 File Upload Support

- **Images**: JPG, PNG, GIF, WebP (displayed as thumbnails)
- **Documents**: PDF, DOC, DOCX, TXT (with file info and download)
- **File size**: Automatically formatted (Bytes, KB, MB, GB)
- **Security**: Client-side file handling only

## 📝 Message Types

The component now supports two message types:

1. **Text messages**: Regular chat messages with emoji support
2. **File messages**: File uploads with previews and download options

## 🎭 Animation Features

- **Chat window**: Smooth open/close with scale and fade effects
- **Emoji picker**: Slide-in animation from bottom
- **Typing indicator**: Bouncing dots with staggered delays
- **Button interactions**: Hover and click animations

## 📄 License

MIT License - feel free to use in your projects!
