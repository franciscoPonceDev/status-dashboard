import { httpClient } from '../httpClient';

const baseURL = '/datapoints/health/status';

const getDatapoints = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const DatapointsAPI = {
  getDatapoints,
};

export default DatapointsAPI;
