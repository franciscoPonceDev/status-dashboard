import { httpClient } from '../httpClient';

const baseURL = '/relationships/health/status';

const getRelationships = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const RelationshipsAPI = {
  getRelationships,
};

export default RelationshipsAPI;
