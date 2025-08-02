import api from './api';

export const messageService = {
  async getConversations() {
    try {
      const res = await api.get('/messages/conversations');
      return res.data;
    } catch (err) {
      console.error('Failed to fetch conversations:', err);
      throw err;
    }
  }
};
