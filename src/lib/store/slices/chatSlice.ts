import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';
import axios from 'axios';

// Types
interface User {
  id: number;
  email: string;
  businessName: string;
  profileImage: string;
}

export interface Conversation { // Exported for use in MessageList.tsx
  id: number;
  otherUser: User;
  product: {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
  };
  lastMessage: { content: string; createdAt: string };
  unreadCount: number;
  subject: string;
  status: string;
  updatedAt: string;
}

export interface Message { // Exported for use in ChatBubble.tsx, CustomToast.tsx
  id: number;
  conversationId: number;
  content: string;
  messageType: string;
  fileUrl?: string;
  isRead: boolean;
  createdAt: string;
  sender: User;
}

interface TypingStatus {
  [conversationId: number]: boolean;
}

interface OnlineStatus {
  [userId: number]: boolean;
}

interface ChatState {
  conversations: Conversation[];
  messages: { [key: number]: Message[] };
  currentChatId: number | null;
  selectedChat: Conversation | null; // Added selectedChat to ChatState
  typing: TypingStatus;
  online: OnlineStatus;
  status: 'idle' | 'loading' | 'failed';
  error: string | null; // Added error to ChatState
}

const initialState: ChatState = {
  conversations: [],
  messages: {},
  currentChatId: null,
  selectedChat: null, // Initialize selectedChat
  typing: {},
  online: {},
  status: 'idle',
  error: null, // Initialize error
};

// Async thunks
export const fetchConversations = createAsyncThunk(
  'chat/fetchConversations',
  async () => {
    const response = await axios.get<Conversation[]>('/api/messages/conversations');
    return response.data;
  }
);

export const fetchMessages = createAsyncThunk(
  'chat/fetchMessages',
  async (conversationId: number) => {
    const response = await axios.get<Message[]>(
      `/api/messages/conversations/${conversationId}/messages`
    );
    return { conversationId, messages: response.data };
  }
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (
    payload: { conversationId: number; content: string; messageType: string; fileUrl?: string },
    { dispatch }
  ) => {
    // Optimistic message already added by UI
    const response = await axios.post<Message>('/api/messages/send', payload);
    return response.data;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setCurrentChat: (state, action: PayloadAction<number>) => {
      state.currentChatId = action.payload;
      // When currentChatId changes, find and set the selectedChat
      state.selectedChat = state.conversations.find(
        (convo) => convo.id === action.payload
      ) || null;
      // Mark messages as read when a chat is selected
      const convo = state.conversations.find((c) => c.id === action.payload);
      if (convo) convo.unreadCount = 0;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const msg = action.payload;
      if (!state.messages[msg.conversationId]) {
        state.messages[msg.conversationId] = [];
      }
      state.messages[msg.conversationId].push(msg);
      // update lastMessage in conversations
      const convo = state.conversations.find((c) => c.id === msg.conversationId);
      if (convo) {
        convo.lastMessage = { content: msg.content, createdAt: msg.createdAt };
        if (state.currentChatId !== msg.conversationId) {
          convo.unreadCount += 1;
        }
      }
    },
    setTypingStatus: (
      state,
      action: PayloadAction<{ conversationId: number; isTyping: boolean }>
    ) => {
      state.typing[action.payload.conversationId] = action.payload.isTyping;
    },
    setUserOnline: (state, action: PayloadAction<number>) => {
      state.online[action.payload] = true;
    },
    setUserOffline: (state, action: PayloadAction<number>) => {
      state.online[action.payload] = false;
    },
    // markAsRead reducer is now handled within setCurrentChat
    // markAsRead: (state, action: PayloadAction<number>) => {
    //   const convo = state.conversations.find((c) => c.id === action.payload);
    //   if (convo) convo.unreadCount = 0;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.status = 'idle';
        state.conversations = action.payload;
        // If a current chat is selected, ensure selectedChat is updated
        if (state.currentChatId) {
          state.selectedChat = state.conversations.find(
            (convo) => convo.id === state.currentChatId
          ) || null;
        }
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch conversations';
      })
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(fetchMessages.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.messages[payload.conversationId] = payload.messages;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch messages';
      })
      .addCase(sendMessage.fulfilled, (state, { payload }) => {
        state.messages[payload.conversationId]?.push(payload);
        // Update lastMessage for the conversation after sending
        const convo = state.conversations.find((c) => c.id === payload.conversationId);
        if (convo) {
          convo.lastMessage = { content: payload.content, createdAt: payload.createdAt };
        }
      });
  },
});

export const {
  setCurrentChat,
  addMessage,
  setTypingStatus,
  setUserOnline,
  setUserOffline,
  // markAsRead is no longer exported as it's handled internally by setCurrentChat
} = chatSlice.actions;

// This selector will now work correctly as 'state.chat' is properly defined in RootState
export const selectChat = (state: RootState) => state.chat;

export default chatSlice.reducer;
