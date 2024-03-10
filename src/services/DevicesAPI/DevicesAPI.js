import { httpClient } from '../httpClient';

const baseURL = '/devices/health/status';

const getDevices = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const DevicesAPI = {
  getDevices,
};

export default DevicesAPI;
