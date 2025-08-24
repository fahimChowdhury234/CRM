# ChatBubble Components

This directory contains the refactored ChatBubble component broken down into smaller, more manageable components.

## Component Structure

### Main Components

- **ChatBubble.jsx** - Main component that orchestrates all functionality
- **ChatInterface.jsx** - Full chat interface when `showChat` is true
- **TabContent.jsx** - Handles all tab views (Home, Messages, Help, News)
- **ChatHeader.jsx** - Header section with title and stats
- **TabNavigation.jsx** - Bottom tab navigation

### Chat Components

- **MessageItem.jsx** - Individual message rendering with support for text, files, and GIFs
- **TypingIndicator.jsx** - Shows when agent is typing
- **ChatInput.jsx** - Input area with emoji picker, GIF picker, and file upload
- **CustomEmojiPicker.jsx** - Emoji selection interface
- **CustomGifPicker.jsx** - GIF selection interface

### Data & Utilities

- **data.js** - Static data (FAQs, blogs, emojis, GIFs)
- **utils.js** - Helper functions (formatting, file type checking)
- **index.js** - Export all components for easy importing

## Benefits of Refactoring

1. **Maintainability** - Each component has a single responsibility
2. **Reusability** - Components can be used independently
3. **Testing** - Easier to write unit tests for individual components
4. **Readability** - Code is more organized and easier to understand
5. **Performance** - Better code splitting and optimization opportunities

## Usage

```jsx
import { ChatBubble } from "./components/ChatBubble";

function App() {
  return (
    <div>
      <ChatBubble />
    </div>
  );
}
```

## Component Props

Each component receives only the props it needs, making them more focused and easier to maintain. The main ChatBubble component manages all state and passes down only necessary data to child components.

## File Organization

- All chat-related components are in the `ChatBubble/` directory
- Static data is separated into `data.js`
- Utility functions are in `utils.js`
- Main component remains at the root level for backward compatibility
