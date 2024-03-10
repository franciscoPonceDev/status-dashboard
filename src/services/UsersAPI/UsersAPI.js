import { httpClient } from '../httpClient';

const baseURL = '/users/health/status';

const getUsers = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const UsersAPI = {
  getUsers,
};

export default UsersAPI;
