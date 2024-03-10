import { httpClient } from '../httpClient';

const baseURL = '/messages/health/status';

const getMessages = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const MessagesAPI = {
  getMessages,
};

export default MessagesAPI;
