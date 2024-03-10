import { httpClient } from '../httpClient';

const baseURL = '/rules/health/status';

const getRules = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const RulesAPI = {
  getRules,
};

export default RulesAPI;
