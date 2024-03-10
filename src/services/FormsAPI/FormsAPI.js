import { httpClient } from '../httpClient';

const baseURL = '/forms/health/status';

const getForms = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const FormsAPI = {
  getForms,
};

export default FormsAPI;
