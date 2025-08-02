import ChatSidebar from '@/components/pages/sellers/dashboard/messages/ChatSidebar';
import ChatWindow from '@/components/pages/sellers/dashboard/messages/ChatWindow';

export default function SellerMessagesPage() {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
}
