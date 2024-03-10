import { httpClient } from '../httpClient';

const baseURL = '/documents/health/status';

const getDocuments = async () => {
  const response = await httpClient.get(baseURL);
  return response;
};

const DocumentsAPI = {
  getDocuments,
};

export default DocumentsAPI;
