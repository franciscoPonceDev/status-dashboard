import { httpClient } from '../httpClient';

const baseURL = '/namespaces/health/status';

const getNamespaces = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const NamespacesAPI = {
  getNamespaces,
};

export default NamespacesAPI;
