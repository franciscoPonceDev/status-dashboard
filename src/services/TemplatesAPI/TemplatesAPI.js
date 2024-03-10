import { httpClient } from '../httpClient';

const baseURL = '/templates/health/status';

const getTemplates = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const TemplatesAPI = {
  getTemplates,
};

export default TemplatesAPI;
