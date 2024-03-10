import { httpClient } from '../httpClient';

const baseURL = '/accounts/health/status';

const getAccounts = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const AccountsAPI = {
  getAccounts,
};

export default AccountsAPI;
