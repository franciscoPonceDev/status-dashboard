import { httpClient } from '../httpClient';

const baseURL = '/assets/health/status';

const getAssets = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const AssetsAPI = {
  getAssets,
};

export default AssetsAPI;
