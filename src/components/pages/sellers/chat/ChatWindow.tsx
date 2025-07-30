import React from "react";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  return (
    <main className="flex-1 flex flex-col justify-between h-full p-4">
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[85vh] pr-2">
        <ChatBubble sender="seller" message="Hi! How can I help you today?" />
        <ChatBubble sender="buyer" message="I want to know more about the item." />
        <ChatBubble sender="seller" message="Sure, let me send the details." />
      </div>
      <MessageInput />
    </main>
  );
};

export default ChatWindow;
