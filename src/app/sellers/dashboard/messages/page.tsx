import React from "react";
import ChatSidebar from "@/components/pages/sellers/chat/ChatSidebar";
import ChatWindow from "@/components/pages/sellers/chat/ChatWindow";

const SellerMessagesPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default SellerMessagesPage;
