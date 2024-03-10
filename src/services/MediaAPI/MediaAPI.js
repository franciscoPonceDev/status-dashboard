import { httpClient } from '../httpClient';

const baseURL = '/media/health/status';

const getMedia = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const MediaAPI = {
  getMedia,
};

export default MediaAPI;
